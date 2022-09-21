<template>
  <router-link
    :to="`/feedback/${feedback.id}`"
    class="bg-white p-5 flex flex-col gap-1.5 rounded-md border-t-8"
    :style="{ borderColor: column.color }"
  >
    <StatusWithCircle :column="column" />

    <h1 class="text-xl font-semibold">{{ feedback.title }}</h1>

    <p class="text-gray-600">{{ feedback.description }}</p>

    <div
      class="bg-blue-100 text-center w-min px-3 py-0.5 text-sm rounded text-blue-800 font-medium"
    >
      {{ feedback.category }}
    </div>

    <div class="flex justify-between items-center mt-1">
      <div class="upvoteBox" @click.prevent="feedback.upvote">
        <span>^</span>

        <span>{{ feedback.upvotes }}</span>
      </div>

      <div class="font-semibold">
        {{ feedback.comments.length }}
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { Feedback } from "../../../core/models/feedback.model";
import { StatusGroup } from "../../../core/types/interfaces/statusGroup.interface";
import StatusWithCircle from "../../../shared/components/StatusWithCircle.vue";

defineProps<{
  feedback: Feedback;
  column: StatusGroup;
}>();
</script>

<style scoped>
.upvoteBox {
  @apply px-2.5 bg-blue-100 rounded flex gap-1.5 items-center justify-center font-medium hover:bg-blue-200/[80%] cursor-pointer;
}
</style>
