<template>
  <Form
    heading="Create New Feedback"
    :submitHandler="handleFormSubmit"
    submitButtonValue="Add Feedback"
  />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { FeedbackInterface } from "../../../../core/types/interfaces/feedback.interface";
import { useFeedbacksStore } from "../../../../shared/store/feedbacks.store";
import Form from "../../components/Form.vue";

const router = useRouter();
const feedbacksStore = useFeedbacksStore();

function handleFormSubmit(formData: FeedbackInterface) {
  feedbacksStore.addFeedback(formData);

  router.go(-1);
}
</script>
