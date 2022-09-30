import { RouteRecordRaw } from "vue-router";

const AddFeedbackView = () => import("./modules/add/AddFeedbackView.vue");
const EditFeedbackView = () => import("./modules/edit/EditFeedbackView.vue");
const PreviewView = () => import("./modules/preview/PreviewView.vue");

export default [
  { path: ":id", component: PreviewView },
  { path: "add", component: AddFeedbackView },
  { path: "edit/:id", component: EditFeedbackView },
] as RouteRecordRaw[];
