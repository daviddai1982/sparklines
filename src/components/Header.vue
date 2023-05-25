<template>
  <header>
    <h1>{{ title }}</h1>
    <span v-if="isAuthenticated" id="profile">
      <img v-bind:src="user.picture" id="profile_pic" />
      <h2>{{ user.nickname }}</h2>
    </span>
  </header>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
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

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

header h1 {
  font-size: 18px;
}

#profile {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
}

#profile h2 {
  font-size: 16px;
}

#profile_pic {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
</style>