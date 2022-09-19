import { RouteRecordRaw } from "vue-router";

const AddVue = () => import("./modules/add/Add.vue");
const EditVue = () => import("./modules/edit/Edit.vue");
const PreviewVue = () => import("./modules/preview/Preview.vue");

export default [
  { path: ":id", component: PreviewVue },
  { path: "add", component: AddVue },
  { path: "edit/:id", component: EditVue },
] as RouteRecordRaw[];
