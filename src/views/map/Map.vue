<template>
  <div>MAP</div>

  <div v-if="authStore.currentUser">USER: {{ authStore.currentUser }}</div>

  <button v-if="!authStore.isLoggedIn" @click="authStore.login">Login</button>
  <button v-else @click="authStore.logout">Logout</button>
</template>

<script setup lang="ts">
import { useAuthStore } from "../../shared/store/auth";

const authStore = useAuthStore();
</script>
