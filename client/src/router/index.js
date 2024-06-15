import { createRouter, createWebHistory } from "vue-router";
import Create from "../views/Create.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Create",
      component: Create,
    },
    {
      path: "/view",
      name: "View",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/View.vue"),
    },
  ],
});

export default router;
