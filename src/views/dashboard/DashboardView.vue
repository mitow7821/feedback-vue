<template>
  <div class="grid grid-cols-[330px,1fr] gap-5 h-full">
    <div class="flex flex-col gap-5">
      <DashboardGradient />
      <DashboardCategory />
      <DashboardStatus />
    </div>

    <div class="grow flex flex-col gap-5">
      <DashboardHeader
        :feedbacks-number="dashboardStore.filteredFeedbacks.length"
      />
      <DashboardList :feedbacks="dashboardStore.filteredFeedbacks" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardGradient from "./components/DashboardGradient.vue";
import DashboardCategory from "./components/DashboardCategory.vue";
import DashboardStatus from "./components/DashboardStatus.vue";
import DashboardHeader from "./components/DashboardHeader.vue";
import DashboardList from "./components/DashboardList.vue";
import { useDashboardStore } from "./dashboard.store";
import { watch } from "vue";
import { useFeedbacksStore } from "../../shared/store/feedbacks.store";

const feedbacksStore = useFeedbacksStore();
const dashboardStore = useDashboardStore();

watch(
  () => dashboardStore.sortBy,
  () => {
    feedbacksStore.feedbacks = dashboardStore.sortFeedbacks(
      feedbacksStore.feedbacks
    );
  },
  { immediate: true }
);
</script>
