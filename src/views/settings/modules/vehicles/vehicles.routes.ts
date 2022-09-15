import { RouteRecordRaw } from "vue-router";

const VehiclesAll = () => import("./views/VehiclesAll.vue");
const VehiclesDetails = () => import("./views/VehiclesDetails.vue");
const VehiclesAdd = () => import("./views/VehiclesAdd.vue");

export default [
  { path: "", component: VehiclesAll },
  { path: ":id(\\d+)", component: VehiclesDetails, props: true },
  { path: "add", component: VehiclesAdd },
] as RouteRecordRaw[];
