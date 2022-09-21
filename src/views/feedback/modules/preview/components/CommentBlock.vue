<template>
  <div class="py-5 flex flex-col gap-3 pr-3">
    <div class="flex items-center gap-5">
      <img :src="comment.avatar" class="w-10 h-10 rounded-full" />

      <div class="flex flex-col leading-[1.1rem] grow">
        <h2 class="font-semibold">{{ comment.createdBy }}</h2>

        <span class="text-gray-500">{{ comment.tag }}</span>
      </div>

      <button @click="handleReply" class="text-blue-700 font-semibold text-sm">
        Reply
      </button>
    </div>

    <div class="pl-5 ml-5" :class="{ 'border-l': comment.replies.length }">
      <p class="text-gray-600 pl-5">
        {{ comment.value }}
      </p>

      <div class="flex flex-col">
        <ReplyBlock
          v-for="reply in comment.replies"
          :key="reply.id"
          :parentComment="comment"
          :reply="reply"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Comment } from "../../../../../core/models/comment.model";
import { usePreviewStore } from "../preview.store";
import ReplyBlock from "./ReplyBlock.vue";

const props = defineProps<{
  comment: Comment;
}>();

const previewStore = usePreviewStore();

function handleReply() {
  previewStore.replyObject = {
    comment: props.comment,
    replyReferenceTag: props.comment.tag,
  };
}
</script>
