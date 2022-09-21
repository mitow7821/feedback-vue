import { Router } from "vue-router";

export default (router: Router) => {
  router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && true) {
      return from.path;
    }
  });
};
