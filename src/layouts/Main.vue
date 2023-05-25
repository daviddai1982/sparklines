<template>
  <div id="main">
    <router-view />
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "Main",

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
#main {
  height: 100%;
  width: 63%;
  background: #FFF;
}
</style>
