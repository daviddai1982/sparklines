<template>
  <div id="feed">
    <div id="feed-title">
      <h1>Feed</h1>
    </div>
    <div id="container">
      <a
        class="twitter-timeline"
        href="https://twitter.com/CryptoBro_News/lists/1531948780098142212?ref_src=twsrc%5Etfw"
        id="tweets"
      ></a>
    </div>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import TwitterWidgetsLoader from "twitter-widgets";

export default {
  name: "Feed",

  mounted() {
    TwitterWidgetsLoader.load();
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
#feed {
  height: 100%;
  width: 18%;
  margin: 0 2%;
  background: #FBFDFF;
}

#feed-title {
  z-index: 10;
  padding: 7.5px 0 5px;
  width: inherit;
  background: #FBFDFF;
  position: absolute;
  top: 0;
  text-align: center;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#feed-title h1 {
  font-size: 18px;
  position: absolute;
  top: 0;
  z-index: 10;
}

#container {
  position: absolute;
  top: 0;
  width: inherit;
  height: 95%;
  overflow: scroll !important;
  z-index: 1 !important;
}

#container::-webkit-scrollbar {
  display: none;
}
</style>
