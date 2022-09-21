<template>
  <div class="bg-white p-5 rounded-md flex flex-col gap-5">
    <div class="flex justify-between items-center">
      <h2 class="text-lg font-semibold">Roadmap</h2>

      <router-link to="/roadmap" class="text-blue-600 underline">
        View
      </router-link>
    </div>

    <div class="flex flex-col gap-1.5">
      <StatusCounter
        v-for="statusCounter in dashboardStore.statusesCounter"
        :key="statusCounter.status"
        :status-counter="statusCounter"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDashboardStore } from "../dashboard.store";
import StatusCounter from "./StatusCounter.vue";

const dashboardStore = useDashboardStore();
</script>
