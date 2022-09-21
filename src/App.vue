<template>
  <div class="bg-blue-50 h-full py-10 px-20">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import preserveFeedbacks from "./shared/utils/preserveFeedback";

preserveFeedbacks();
</script>
