import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import News from "../components/News.vue";
import User from "../components/User.vue";
import Settings from "../components/Settings.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/news",
    name: "news",
    component: News
  },
  {
    path: "/user",
    name: "user",
    component: User
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
