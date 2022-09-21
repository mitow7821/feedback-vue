<template>
  <div class="bg-white p-5 rounded-md flex flex-col gap-4">
    <h1 class="text-xl font-semibold">{{ header }}</h1>

    <textarea
      v-model="comment"
      rows="3"
      maxlength="250"
      class="bg-blue-50 rounded w-full p-3"
      :placeholder="inputPlaceholder"
    ></textarea>

    <div class="flex justify-between">
      <span class="text-gray-500">{{ charsLeftSpan }}</span>

      <div class="flex gap-3">
        <button
          v-if="showCancelButton"
          class="button | bg-sky-900"
          @click="emit('cancel')"
        >
          Cancel
        </button>

        <button
          :disabled="!comment.length"
          class="button | bg-purple-600 disabled:bg-purple-400"
          @click="handleSubmit"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import formatOrdinals from "../../../../../../shared/utils/formatOrdinals";

const emit = defineEmits(["submit", "cancel"]);
defineProps<{
  header: string;
  inputPlaceholder: string;
  buttonText: string;
  showCancelButton?: Boolean;
}>();

const comment = ref("");

const suffixes = new Map([
  ["one", "Character"],
  ["two", "Characters"],
  ["few", "Characters"],
  ["other", "Characters"],
]);

const charsLeftSpan = computed(() => {
  const charsLeft = 250 - comment.value.length;
  const text = formatOrdinals(suffixes, charsLeft);

  return `${charsLeft} ${text}`;
});

function handleSubmit() {
  if (!comment.value) {
    return;
  }

  emit("submit", comment.value);

  comment.value = "";
}
</script>
