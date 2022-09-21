import { RouteRecordRaw } from "vue-router";

const AddFeedbackForm = () => import("./modules/add/AddFeedbackForm.vue");
const EditFeedbackForm = () => import("./modules/edit/EditFeedbackForm.vue");
const PreviewView = () => import("./modules/preview/PreviewView.vue");

export default [
  { path: ":id", component: PreviewView },
  { path: "add", component: AddFeedbackForm },
  { path: "edit/:id", component: EditFeedbackForm },
] as RouteRecordRaw[];
