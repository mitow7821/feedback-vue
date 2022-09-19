import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import authGuard from "./core/guards/auth";
import feedbackRoutes from "./views/feedback/feedback.routes";

const Dashboard = () => import("./views/dashboard/Dashboard.vue");
const Roadmap = () => import("./views/roadmap/Roadmap.vue");
const NotFound = () => import("./views/NotFound.vue");

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/dashboard" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/roadmap", name: "Roadmap", component: Roadmap },
  { path: "/feedback", name: "Feedback", children: feedbackRoutes },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

authGuard(router);

export default router;
