<template>
  <div id="profile">
    <pre v-if="isAuthenticated">
        <code>{{ user }}</code>

      </pre>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  data() {
    return {
      profile: this.user,
    };
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
</style>
