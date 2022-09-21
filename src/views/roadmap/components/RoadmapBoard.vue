<template>
  <div class="flex gap-4 overflow-x-auto">
    <div
      v-for="column in roadmapStore.columns"
      :key="column.status"
      class="min-w-[300px] flex-grow flex flex-col gap-3 overflow-hidden"
    >
      <h3 class="font-semibold">{{ `${column.status} (${column.count})` }}</h3>

      <div class="flex flex-col gap-4 overflow-auto">
        <RoadmapCard
          v-for="feedback in column.feedbacks"
          :key="feedback.id"
          :feedback="feedback"
          :column="column"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoadmapStore } from "../roadmap.store";
import RoadmapCard from "./RoadmapCard.vue";

const roadmapStore = useRoadmapStore();
</script>
