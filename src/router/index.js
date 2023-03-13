import { createRouter, createWebHistory } from "vue-router";
import Meta from "vue-meta";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("../views/main/Index.vue"),
      meta: {
        dataInMeta: "test",
      },
    },
    {
      path: "/project/:id",
      name: "project",
      component: () => import("../views/project/Index.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/main/Login.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/product/Index.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/about/Index.vue"),
    },
  ],
});

export default router;
