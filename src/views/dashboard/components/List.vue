<template>
  <div class="flex flex-col gap-3">
    <FeedbackCard
      v-for="feedback in feedbacks"
      :key="feedback.id"
      :feedback="feedback"
      :isRouterLink="true"
    />
  </div>
</template>

<script setup lang="ts">
import FeedbackCard from "../../../shared/components/FeedbackCard.vue";
import { Feedback } from "../../../core/models/feedback.model";

defineProps<{
  feedbacks: Feedback[];
}>();
</script>
