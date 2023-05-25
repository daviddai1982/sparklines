 <template>
  <div id="sidebar">
    <div id="brand">
      <img id="logo" alt="logo" src="../assets/img/logo.png" />
      <h1>Crypto<Span id="bro">Bro</Span></h1>
    </div>

    <nav>
      <router-link to="/">
        <div class="icons">
          <img
            class="black"
            id="logo"
            alt="logo"
            src="../assets/img/Home.JPG"
          />
          <img
            class="white"
            id="logo"
            alt="logo"
            src="../assets/img/Home_White.JPG"
          />
        </div>
        <h2>Market Update</h2>
      </router-link>

      <router-link to="/news">
        <div class="icons">
          <img
            class="black"
            id="logo"
            alt="logo"
            src="../assets/img/CryptoNews.JPG"
          />
          <img
            class="white"
            id="logo"
            alt="logo"
            src="../assets/img/CryptoNews_White.JPG"
          />
        </div>
        <h2>Crypto News</h2>
      </router-link>

      <span v-if="isAuthenticated">
        <router-link to="/user">
          <div class="icons">
            <img
              class="black"
              id="logo"
              alt="logo"
              src="../assets/img/Dashboard.JPG"
            />
            <img
              class="white"
              id="logo"
              alt="logo"
              src="../assets/img/Dashboard_White.JPG"
            />
          </div>
          <h2>Dashboard</h2>
        </router-link>

        <router-link to="/settings">
          <div class="icons">
            <img
              class="black"
              id="logo"
              alt="logo"
              src="../assets/img/Settings.JPG"
            />
            <img
              class="white"
              id="logo"
              alt="logo"
              src="../assets/img/Settings_White.JPG"
            />
          </div>
          <h2>Settings</h2>
        </router-link>

        <Logout />
      </span>
      <span v-else>
        <Login />
      </span>
    </nav>

    <footer>
      <img
        class="logo"
        id="facebook"
        alt="facebook"
        src="../assets/img/facebook.png"
      />
      <img
        class="logo"
        id="twitter"
        alt="twitter"
        src="../assets/img/twitter.png"
      />
      <img
        class="logo"
        id="discord"
        alt="discord"
        src="../assets/img/discord.png"
      />
      <img
        class="logo"
        id="linkedin"
        alt="linkedin"
        src="../assets/img/linkedin.png"
      />
    </footer>
  </div>
</template>

<script>
import Login from "../components/Login";
import Logout from "../components/Logout";
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "SideBar",
  components: {
    Login,
    Logout,
  },

  setup() {
    const { user, isAuthenticated } = useAuth0();

    return {
      user,
      isAuthenticated,
    };
  },
};
</script>

<style>
#sidebar {
  position: relative;
  width: 15%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#brand {
  margin-top: 2%;
  margin-left: -10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
}

#brand > #logo {
  height: 55px;
  width: 55px;
}

#brand > h1 {
  font-size: 18px;
}

#brand #bro {
  color: #4062FF;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: fit-content;
  height: 40%;
  margin-top: 20%;
}

nav a {
  font-weight: bold;
  color: #161C24;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  position: relative;
  padding: 2.5px 7.5px;
  margin: 5px 0;
  gap: 10px;
}

nav a.router-link-exact-active {
  color: #FFFFFF;
  background: #4062FF;
}

nav a .icons {
  height: 32px;
  width: 32px;
}

nav a img {
  height: 28px;
  width: 28px;
}

.icons .black {
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 1;
}

nav a.router-link-exact-active .black {
  z-index: 3;
  opacity: 0;
}

.icons .white {
  position: absolute;
  top: 7.5px;
  left: 7.5px;
  z-index: 1;
  opacity: 0;
}

nav a.router-link-exact-active .white {
  z-index: 3;
  opacity: 1;
}

nav a h2 {
  font-size: 14px;
}

footer {
  position: absolute;
  bottom: 5%;
  display: flex;
  width: fit-content;
  gap: 10px;
}

footer .logo {
  height: 20px;
  width: 20px;
}
</style>