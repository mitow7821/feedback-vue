<template>
  <FormWrapper
    heading="Create New Feedback"
    :submit-handler="handleFormSubmit"
    submit-button-value="Add Feedback"
  />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { FeedbackInterface } from "../../../../core/types/interfaces/feedback.interface";
import { useFeedbacksStore } from "../../../../shared/store/feedbacks.store";
import FormWrapper from "../../components/FormWrapper.vue";

const router = useRouter();
const feedbacksStore = useFeedbacksStore();

function handleFormSubmit(formData: FeedbackInterface) {
  feedbacksStore.addFeedback(formData);

  router.go(-1);
}
</script>
