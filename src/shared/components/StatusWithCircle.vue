<template>
  <div class="flex items-center gap-3">
    <div
      :style="{ background: column.color }"
      class="w-3 h-3 rounded-full"
    ></div>

    <span> {{ column.status }} </span>
  </div>
</template>

<script setup lang="ts">
import { StatusGroup } from "../../core/types/interfaces/statusGroup.interface";

defineProps<{ column: StatusGroup }>();
</script>
