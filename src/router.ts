import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import authGuard from "./core/guards/auth";
import feedbackRoutes from "./views/feedback/feedback.routes";

const DashboardView = () => import("./views/dashboard/DashboardView.vue");
const RoadmapView = () => import("./views/roadmap/RoadmapView.vue");
const NotFound = () => import("./views/NotFound.vue");

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/dashboard" },
  { path: "/dashboard", name: "Dashboard", component: DashboardView },
  { path: "/roadmap", name: "Roadmap", component: RoadmapView },
  { path: "/feedback", name: "Feedback", children: feedbackRoutes },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

authGuard(router);

export default router;
