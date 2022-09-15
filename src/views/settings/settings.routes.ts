import { RouteRecordRaw } from "vue-router";
import vehiclesRoutes from "./modules/vehicles/vehicles.routes";

const Vehicles = () => import("./modules/vehicles/Vehicles.vue");
const Users = () => import("./modules/users/Users.vue");

export default [
  { path: "vehicles", component: Vehicles, children: vehiclesRoutes },
  { path: "users", component: Users, meta: { requiresAuth: true } },
] as RouteRecordRaw[];
