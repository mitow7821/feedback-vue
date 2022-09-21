<template>
  <div
    v-if="feedback"
    class="max-w-[1000px] mx-auto flex flex-col gap-5 h-full overflow-hidden"
  >
    <PreviewHeader :id="feedbackId" />
    <FeedbackCard :feedback="feedback" />
    <PreviewComments :comments="feedback.comments" />

    <ReplyForm
      v-if="previewStore.replyObject"
      v-bind="previewStore.replyObject"
    />
    <AddCommentForm v-else :feedback="feedback" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useFeedbacksStore } from "../../../../shared/store/feedbacks.store";
import PreviewComments from "./components/PreviewComments.vue";
import FeedbackCard from "../../../../shared/components/FeedbackCard.vue";
import PreviewHeader from "./components/PreviewHeader.vue";
import { usePreviewStore } from "./preview.store";
import AddCommentForm from "./components/form/AddCommentForm.vue";
import ReplyForm from "./components/form/ReplyForm.vue";

const route = useRoute();
const router = useRouter();
const feedbacksStore = useFeedbacksStore();
const previewStore = usePreviewStore();

const feedbackId = `${route.params.id}`;
const feedback = ref(feedbacksStore.getOne(feedbackId));

onBeforeMount(() => {
  if (!feedback.value) {
    router.go(-1);
  }
});
</script>
