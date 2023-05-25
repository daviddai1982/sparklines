<template>
  <div class="login_box" @click="login">
    <div class="icons">
      <img class="black" id="logo" alt="logo" src="../assets/img/Login.JPG" />
    </div>
    <h2 id="logoutText">Login</h2>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const { loginWithRedirect } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
    };
  },
};
</script>

<style scoped>
.login_box {
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
  cursor: pointer;
}

img {
  height: 28px;
  width: 28px;
  margin-left: 5px;
}

#logoutText {
  font-size: 14px;
}

#logoutButton:hover {
  background: transparent;
}

#logoutButton.router-link-exact-active {
  background: transparent;
}
</style>