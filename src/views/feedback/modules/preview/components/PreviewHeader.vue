<template>
  <div class="flex justify-between items-center">
    <button @click="$router.go(-1)">&lt; Go Back</button>

    <router-link :to="`edit/${id}`" class="button | bg-blue-600"
      >Edit Feedback</router-link
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
}>();
</script>
