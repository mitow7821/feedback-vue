import { defineStore } from "pinia";

interface State {
  currentUser: string | null;
}
export const useAuthStore = defineStore("authStore", {
  state: (): State => {
    return {
      currentUser: null,
    };
  },

  getters: {
    isLoggedIn: (state) => !!state.currentUser,
  },

  actions: {
    login() {
      this.$state.currentUser = "user";
    },

    logout() {
      this.$state.currentUser = null;
    },
  },
});
