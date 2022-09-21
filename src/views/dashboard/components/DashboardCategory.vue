<template>
  <div class="bg-white p-5 rounded-md flex flex-wrap gap-2.5 h-min">
    <div
      v-for="category in categories"
      :key="category"
      class="cursor-pointer w-min h-min rounded-md px-5 py-0.5"
      :class="
        isActive(category)
          ? 'bg-blue-600 text-white'
          : 'bg-blue-50 text-blue-600'
      "
      @click="dashboardStore.changeCategory(category)"
    >
      {{ category }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { feedbackCategories } from "../../../shared/constants/feedbackCategories";
import { useDashboardStore } from "../dashboard.store";
import { AvailableCategories } from "../dashboard.types";

const dashboardStore = useDashboardStore();
const categories: AvailableCategories[] = ["All", ...feedbackCategories];

const isActive = (category: AvailableCategories) =>
  dashboardStore.selectedCategory === category;
</script>
