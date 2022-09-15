import { Router } from "vue-router";
import { useAuthStore } from "../../shared/store/auth";

export default (router: Router) => {
  router.beforeEach((to, from) => {
    const authStore = useAuthStore();

    if (to.meta.requiresAuth && !authStore.isLoggedIn) {
      return from.path;
    }
  });
};
