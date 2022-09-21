<template>
  <div class="bg-white p-5 rounded-md overflow-hidden flex flex-col gap-5">
    <h1 class="text-xl font-semibold">
      {{ comments.length }} {{ formattedHeading }}
    </h1>

    <div class="flex flex-col overflow-auto">
      <CommentBlock
        v-for="comment in comments"
        :key="comment.id"
        class="border-b last:border-0 first:pt-0"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Comment } from "../../../../../core/models/comment.model";
import formatOrdinals from "../../../../../shared/utils/formatOrdinals";
import CommentBlock from "./CommentBlock.vue";

const props = defineProps<{
  comments: Comment[];
}>();

const suffixes = new Map([
  ["one", "Comment"],
  ["two", "Comments"],
  ["few", "Comments"],
  ["other", "Comments"],
]);

const formattedHeading = computed(() =>
  formatOrdinals(suffixes, props.comments.length)
);
</script>
