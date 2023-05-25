<template>
  <SideBar />
  <Main />
  <Feed />
</template>

<script>
import SideBar from "./layouts/SideBar";
import Main from "./layouts/Main";
import Feed from "./layouts/Feed";

export default {
  name: "App",
  components: {
    SideBar,
    Main,
    Feed,
  },
  data() {
    return {
      loading: true,
      blue: "#4062FF",
    };
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Roboto+Flex:opsz@8..144&display=swap");
body {
  margin: 0 !important;
  overflow: hidden !important;
}

#app {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #f2f8ff;
  color: #2c3e50;
  display: flex;
}

h1,
h2 {
  font-weight: 700;
}
</style>