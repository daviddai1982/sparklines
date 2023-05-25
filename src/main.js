import { createApp } from "vue";
import App from "./App.vue";
import { Domain, ClientId } from "../auth_config.json"; // Import the plugin here
import { createAuth0 } from "@auth0/auth0-vue";
import router from "./router";
import "./normalise.css";

const app = createApp(App);

app.use(
  createAuth0({
    domain: Domain,
    client_id: ClientId,
    redirect_uri: window.location.origin
  })
);

app.use(router);

app.mount("#app");
