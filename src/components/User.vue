<template>
  <div id="header">
    <h1>User Profile</h1>
  </div>
  <Profile />
</template>

<script>
import Profile from "../components/Profile";

export default {
  name: "User",
  components: {
    Profile,
  },
};
</script>
