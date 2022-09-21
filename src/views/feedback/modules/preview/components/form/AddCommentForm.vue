<template>
  <CommentFormWrapper
    header="Add Comment"
    input-placeholder="Type your comment here"
    button-text="Post Comment"
    @submit="addComment"
  />
</template>

<script setup lang="ts">
import { Comment } from "../../../../../../core/models/comment.model";
import { Feedback } from "../../../../../../core/models/feedback.model";
import CommentFormWrapper from "./CommentFormWrapper.vue";

const props = defineProps<{
  feedback: Feedback;
}>();

function addComment(value: string) {
  props.feedback.addComment(
    new Comment({
      value,
      createdBy: "Dawid Stefanko",
      tag: "@dawid.syefa",
    })
  );
}
</script>
