<template>
  <div>
    <div>DETAILS Params:{{ $route.params.id }} Props:{{ id }}</div>

    <button @click="$router.back()">go back</button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    default: undefined,
  },
});
</script>
