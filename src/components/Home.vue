<template>
  <div id="home">
    <Header title="Market Update" />
    <Selectors
      :searchValue="searchText"
      @update:searchValue="(newValue) => (searchText = newValue)"
    />

    <main v-if="loading" id="loader">
      <RingLoader :color="blue" />
    </main>

    <main v-else-if="cryptos">
      <table class="tftable" border="1" ref="table">
        <tr id="header">
          <th>RANK</th>
          <th class="name">NAME</th>
          <th class="price">LAST PRICE</th>
          <th>CHANGE</th>
          <th>MARKET STATS</th>
          <th>FAVORITES</th>
        </tr>
        <tr v-for="(crypto, index) in filteredProducts" :key="index">
          <td>{{ crypto.market_cap_rank }}</td>
          <td class="name">
            <img v-bind:src="crypto.image" />
            <span>{{ crypto.name }} </span> |
            <span>{{ crypto.symbol }} </span>
          </td>
          <td class="price">
            {{
              crypto.current_price >= 1
                ? crypto.current_price.toFixed(0)
                : crypto.current_price.toFixed(2)
            }}
            $
          </td>
          <td>
            {{
              Math.round(crypto.price_change_percentage_24h * 100 - 100) / 100
            }}%
          </td>
          <td>
            <sparkline
              v-bind:data="crypto.sparkline_in_7d.price"
              :color="[
                crypto.sparkline_in_7d.price[167] >
                crypto.sparkline_in_7d.price[0]
                  ? 'green'
                  : 'red',
              ]"
            >
            </sparkline>
          </td>
          <td class="row" v-if="!isAuthenticated" @click="login" ref="td">
            <input
              class="inputs"
              type="checkbox"
              :id="`${crypto.market_cap_rank}`"
              ref="input"
            />
            <img
              src="../assets/img/unfavorite.png"
              alt="unfavorite"
              class="favorite"
              :id="`${crypto.market_cap_rank}`"
            />
          </td>
          <td v-else @click="addWishlist(user, crypto, index)">
            <span v-if="imgClicked[crypto.market_cap_rank]">
              <input
                class="inputs"
                type="checkbox"
                :id="`${crypto.market_cap_rank}`"
                ref="input"
              />
              <img
                src="../assets/img/favorite.png"
                alt="favorite"
                class="favorite"
                :id="`${crypto.market_cap_rank}`"
              />
            </span>
            <span v-else>
              <input
                class="inputs"
                type="checkbox"
                :id="`${crypto.market_cap_rank}`"
                ref="input"
              />
              <img
                src="../assets/img/unfavorite.png"
                alt="unfavorite"
                class="favorite"
                :id="`${crypto.market_cap_rank}`"
              />
            </span>
          </td>
        </tr>
      </table>
    </main>

    <main v-if="errored">Something went wrong</main>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import Header from "./Header";
import Selectors from "./Selectors";
import Sparkline from "./Sparkline";
import RingLoader from "vue-spinner/src/RingLoader.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Header,
    Selectors,
    Sparkline,
    RingLoader,
  },

  data() {
    return {
      cryptos: null,
      dataSet: "",
      loading: true,
      errored: false,
      tab: null,
      text: "center",
      fill: true,
      padding: 8,
      radius: 10,
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      width: 2,
      lineCap: "round",
      type: "trend",
      blue: "#4062FF",
      searchText: "",
      selected: "market_cap_desc",
      wishlist: [],
      imgClicked: [],
      profile: this.user,
      authenticated: this.isAuthenticated,
    };
  },

  setup() {
    const { user, isAuthenticated, loginWithRedirect } = useAuth0();

    return {
      user,
      isAuthenticated,
      login: () => {
        loginWithRedirect();
      },
    };
  },

  methods: {
    fetchData() {
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${this.selected}&per_page=20&page=1&sparkline=true&price_change_percentage=7d`
        )
        .then((response) => {
          this.cryptos = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },

    fetchUser(user) {
      try {
        const id = user.sub.toString().replace("auth0|", "");
        console.log(user);
        console.log(id);

        axios
          .get(`https://78mj3y.sse.codesandbox.io/users/${id}`)
          .then((response) => {
            console.log(response);
            this.wishlist = response.data.wishlist;
          });
        console.log(this.wishlist);
      } catch (error) {
        console.log("ERROR");
      } finally {
        this.loading = false;
        console.log(this.wishlist);
      }
    },

    match(array) {
      let tableau = [...array];
      for (var i = 0; i < tableau.length; i++) {
        let input_value = tableau[i];
        let input = document.getElementById(input_value);
        setTimeout(() => {
          if (input) {
            let inputId = parseInt(input.id);
            input.checked = true;
            this.imgClicked[inputId] = true;
          }
        }, 10);
      }
    },

    async addWishlist(user, crypto, index) {
      const id = user.sub.toString().replace("auth0|", "");
      const selected = { "selected": crypto.market_cap_rank };
      let input = document.getElementById(crypto.market_cap_rank);

      if (input.checked === false) {
        const options = {
          url: `https://78mj3y.sse.codesandbox.io/users/wishlist/${id}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          //body: JSON.stringify(selected),
          body: selected,
        };
        console.log(options);
        await axios(options)
          .then((res) => {
            //this.wishlist.push(crypto.market_cap_rank);
            input.checked = true;
            this.imgClicked[crypto.market_cap_rank] = true;
          })
          .catch((error) => {
            window.alert(error);
            return;
          });
      } else {
        const options = {
          url: `https://78mj3y.sse.codesandbox.io/users/wishlist/${id}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: selected,
        };

        console.log(options);

        await axios(options)
          .then((res) => {
            /* this.wishlist = this.wishlist.filter(
              (element) => element !== crypto.market_cap_rank
            );*/
            input.checked = false;
            this.imgClicked[crypto.market_cap_rank] = false;
          })
          .catch((error) => {
            window.alert(error);
            return;
          });
      }
    },

    likeProduct(rank, index) {
      let input = document.getElementById(rank);
      if (this.wishlist.find((element) => element === rank)) {
        this.wishlist = this.wishlist.filter((element) => element !== rank);
        input.checked = false;
        this.imgClicked[rank] = false;
        //fav
      } else {
        this.wishlist.push(rank);
        input.checked = true;
        this.imgClicked[rank] = true;
      }
    },
  },

  watch: {
    selected: function (newVal, oldVal) {
      this.fetchData();
    },
    isAuthenticated: function (newVal, oldVal) {
      if (oldVal === true) {
        this.wishlist = [];
      }
    },
    wishlist: function (newVal, oldVal) {
      this.match(newVal);
    },
  },

  computed: {
    filteredProducts() {
      return this.cryptos.filter(
        (crypto) =>
          crypto.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !==
          -1
      );
    },

    imgSrc: function () {
      return this.imgClicked
        ? "require('../assets/img/favorite.png')"
        : "require('../assets/img/unfavorite.png')";
    },

    imgAlt: function () {
      return this.imgClicked ? "favorite" : "unfavorite";
    },
  },

  beforeMount() {
    this.fetchData();
    setTimeout(() => {
      this.fetchUser(this.user);
    }, 1000);
  },

  mounted() {},
};
</script>

<style>
#loader {
  display: flex;
  justify-content: center;
  align-items: center;
}

#home {
  height: 97%;
  width: 96%;
  padding: 1% 2%;
  display: flex;
  flex-direction: column;
  gap: 2.5%;
  background: #FBFDFF;
}

main {
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-evenly;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

main::-webkit-scrollbar {
  display: none;
}

main > div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border: none;
}

table th {
  border: none;
  padding: 5px 0px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
}

tr:first-of-type {
  background: #FBFDFF;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
}

tr img {
  height: 30px;
  width: auto;
}

table td {
  border: none;
  border-bottom: 0.5px solid #C4CDD5;
  padding: 4px 0px;
}

.name {
  padding-left: 20px;
  text-align: left;
  padding-bottom: 8px;
}

td.name {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 5px;
}

td .favorite {
  height: 25px;
  width: auto;
  cursor: pointer;
}
td input {
  display: none;
}
</style>
