<template>
  <section id="selectors">
    <div id="searchBar">
      <input
        :value="searchValue"
        @input="$emit('update:searchValue', $event.target.value)"
        id="searchInput"
        type="text"
        placeholder="Search anything"
      />
      <img id="searchIcon" src="../assets/img/Loop.JPG" />
    </div>

    <select id="sort" v-model="selected">
      <option value="market_cap_asc">Market Cap ⬆️</option>
      <option value="market_cap_desc" selected>Market Cap ⬇️</option>
      <option value="volume_asc">Volume ⬆️</option>
      <option value="volume_desc">Volume ⬇️</option>
    </select>
  </section>
</template>

<script>
import axios from "axios";

export default {
  props: ["searchValue"],
  emits: ["update:searchValue"],

  data() {
    return {
      search: "",
      selected: "market_cap_desc",
    };
  },

  methods: {
    fetchData() {
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${this.selected}&per_page=100&page=1&sparkline=true&price_change_percentage=7d`
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
  },
};
</script>

<style scoped>
#selectors {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2.5%;
}

#searchBar {
  height: 35px;
  width: 40%;
}

#searchInput {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 0.1px#DADFE5 solid;
  padding-left: 20%;
}

#searchInput::placeholder {
  color: #9FAAB5;
}

#searchIcon {
  position: relative;
  top: -30px;
  left: -120px;
  height: 22px;
  width: 22px;
}

#sort {
  width: 20%;
  margin-top: 1px;
  height: 39px;
  border-radius: 5px;
  border: 0.1px #DADFE5 solid;
  padding: 10px;
  color: #9FAAB5;
}
</style>