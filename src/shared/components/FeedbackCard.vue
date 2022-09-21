<template>
  <component
    :is="isRouterLink ? 'router-link' : 'div'"
    :to="`/feedback/${feedback.id}`"
    class="bg-white p-5 flex gap-5 rounded-md"
  >
    <div class="upvoteBox" @click.prevent="feedback.upvote">
      <span class="leading-3">^</span>

      <span class="leading-3">{{ feedback.upvotes }}</span>
    </div>

    <div class="grow">
      <h1 class="text-xl font-semibold">{{ feedback.title }}</h1>

      <p class="text-gray-600">{{ feedback.description }}</p>

      <div
        class="bg-blue-100 text-center w-min px-3 py-0.5 text-sm rounded text-blue-800 font-medium"
      >
        {{ feedback.category }}
      </div>
    </div>

    <div class="font-semibold">
      {{ feedback.comments.length }}
    </div>
  </component>
</template>

<script setup lang="ts">
import { Feedback } from "../../core/models/feedback.model";

defineProps<{
  feedback: Feedback;
  isRouterLink?: Boolean;
}>();
</script>

<style scoped>
.upvoteBox {
  @apply h-10 w-8 bg-blue-100 rounded flex flex-col items-center justify-center font-medium cursor-pointer hover:bg-blue-200/[80%];
}
</style>
