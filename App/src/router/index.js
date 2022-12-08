import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/news",
      name: "News",
      component: () => import("../views/News.vue"),
    },
    {
      path: "/activities",
      name: "Activities",
      component: () => import("../views/Activities.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/manage",
      name: "Manage",
      component: () => import("../views/Manage.vue"),
    },
    {
      path: "/account",
      name: "Account",
      component: () => import("../views/Account.vue"),
    },
  ],
});

export default router;
