<template>
  <div class="pt-5 flex flex-col gap-3">
    <div class="flex items-center gap-5">
      <img :src="reply.avatar" class="w-10 h-10 rounded-full" />

      <div class="flex flex-col leading-[1.1rem] grow">
        <h2 class="font-semibold">{{ reply.createdBy }}</h2>

        <span class="text-gray-500">{{ reply.tag }}</span>
      </div>

      <button @click="handleReply" class="text-blue-700 font-semibold text-sm">
        Reply
      </button>
    </div>

    <p class="text-gray-600 pl-[3.75rem]">
      <span class="text-purple-600 font-semibold">
        {{ reply.replyReferenceTag }}
      </span>

      {{ reply.value }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Comment } from "../../../../../core/models/comment.model";
import { Reply } from "../../../../../core/models/reply.model";
import { usePreviewStore } from "../preview.store";

const props = defineProps<{
  reply: Reply;
  parentComment: Comment;
}>();

const previewStore = usePreviewStore();

function handleReply() {
  previewStore.replyObject = {
    comment: props.parentComment,
    replyReferenceTag: props.reply.tag,
  };
}
</script>
