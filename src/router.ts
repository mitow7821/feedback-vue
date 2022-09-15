import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import settingsRoutes from "./views/settings/settings.routes";
import authGuard from "./core/authGuard";

const Map = () => import("./views/map/Map.vue");
const Settings = () => import("./views/settings/Settings.vue");
const NotFound = () => import("./views/NotFound.vue");

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/map" },
  { path: "/map", name: "Map", component: Map },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    children: settingsRoutes,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

authGuard(router);

export default router;
