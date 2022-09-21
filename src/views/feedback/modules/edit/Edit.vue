<template>
  <Form
    heading="Edit Feedback"
    :submitHandler="handleFormSubmit"
    :initialFormData="editedFeedback"
    submitButtonValue="Update Feedback"
    @removeFeedback="removeFeedback"
  />
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { FeedbackInterface } from "../../../../core/types/interfaces/feedback.interface";
import { useFeedbacksStore } from "../../../../shared/store/feedbacks.store";
import Form from "../../components/Form.vue";

const route = useRoute();
const router = useRouter();
const feedbacksStore = useFeedbacksStore();

const feedbackId = `${route.params.id}`;
const editedFeedback = ref(feedbacksStore.getOne(feedbackId));

onBeforeMount(() => {
  if (!editedFeedback.value) {
    router.go(-1);
  }
});

function handleFormSubmit(formData: FeedbackInterface) {
  feedbacksStore.updateFeedback(feedbackId, formData);

  router.go(-1);
}

function removeFeedback() {
  feedbacksStore.removeFeedback(feedbackId);

  router.go(-2);
}
</script>
