import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/news",
      name: "News",
      component: () => import("../views/NewsView.vue"),
    },
    {
      path: "/activities",
      name: "Activities",
      component: () => import("../views/ActivitiesView.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/manage",
      name: "Manage",
      component: () => import("../views/ManageView.vue"),
    },
    {
      path: "/account",
      name: "Account",
      component: () => import("../views/AccountView.vue"),
    },
  ],
});

export default router;
