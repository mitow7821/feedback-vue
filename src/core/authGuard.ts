import { Router } from "vue-router";

export default (router: Router) => {
  router.beforeEach((to, from) => {
    if (to.meta.requiresAuth) {
      return from.path;
    }
  });
};
