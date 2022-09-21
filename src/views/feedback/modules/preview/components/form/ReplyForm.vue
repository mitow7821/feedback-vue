<template>
  <CommentFormWrapper
    :header="`Reply To ${comment.tag} Comment`"
    inputPlaceholder="Type your reply here"
    buttonText="Post Reply"
    :showCancelButton="true"
    @submit="addReply"
    @cancel="cancelReply"
  />
</template>

<script setup lang="ts">
import { Comment } from "../../../../../../core/models/comment.model";
import { Reply } from "../../../../../../core/models/reply.model";
import { usePreviewStore } from "../../preview.store";
import CommentFormWrapper from "./CommentFormWrapper.vue";

const props = defineProps<{
  comment: Comment;
  replyReferenceTag: string;
}>();

function cancelReply() {
  const previewStore = usePreviewStore();

  previewStore.replyObject = null;
}

function addReply(value: string) {
  props.comment.addReply(
    new Reply({
      replyReferenceTag: props.replyReferenceTag,
      value,
      createdBy: "Dawid Stefanko",
      tag: "@dawid.syefa",
    })
  );

  cancelReply();
}
</script>
