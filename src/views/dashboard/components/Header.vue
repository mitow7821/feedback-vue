<template>
  <div
    class="bg-sky-900 rounded-md p-5 flex justify-between items-center gap-5 text-white"
  >
    <h1 class="font-semibold text-xl">
      {{ feedbacksNumber }} {{ formattedHeading }}
    </h1>

    <div>
      <span>Sort by:</span>

      <select class="bg-transparent" v-model="dashboardStore.sortBy">
        <option :value="SortBy.UPVOTES">{{ SortBy.UPVOTES }}</option>
        <option :value="SortBy.COMMENTS">{{ SortBy.COMMENTS }}</option>
      </select>
    </div>

    <router-link to="/feedback/add" class="button | bg-purple-600 ml-auto"
      >+ Add Feedback
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import formatOrdinals from "../../../shared/utils/formatOrdinals";
import { useDashboardStore } from "../dashboard.store";
import { SortBy } from "../dashboard.types";

const dashboardStore = useDashboardStore();

const props = defineProps<{
  feedbacksNumber: number;
}>();

const suffixes = new Map([
  ["one", "Suggestion"],
  ["two", "Suggestions"],
  ["few", "Suggestions"],
  ["other", "Suggestions"],
]);

const formattedHeading = computed(() =>
  formatOrdinals(suffixes, props.feedbacksNumber)
);
</script>
