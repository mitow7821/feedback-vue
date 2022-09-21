<template>
  <div class="flex flex-col gap-3">
    <FeedbackCard
      v-for="feedback in feedbacks"
      :feedback="feedback"
      :isRouterLink="true"
      :key="feedback.id"
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
