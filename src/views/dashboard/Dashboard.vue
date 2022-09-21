<template>
  <div class="grid grid-cols-[330px,1fr] gap-5 h-full">
    <div class="flex flex-col gap-5">
      <Gradient />
      <Category />
      <Status />
    </div>

    <div class="grow flex flex-col gap-5">
      <Header :feedbacksNumber="dashboardStore.filteredFeedbacks.length" />
      <List :feedbacks="dashboardStore.filteredFeedbacks" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Gradient from "./components/Gradient.vue";
import Category from "./components/Category.vue";
import Status from "./components/Status.vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
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
