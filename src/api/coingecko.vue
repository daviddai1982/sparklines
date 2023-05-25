<script>
import axios from "axios";

export default {
  data() {
    return {
      apiClient: {
        method: "GET",
        baseURL: "https://www.coingecko.com/fr/api/",
        withCredentials: false,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    };
  },

  getAllCoins() {
    return apiClient.get("/coins/list");
  },
};
</script>