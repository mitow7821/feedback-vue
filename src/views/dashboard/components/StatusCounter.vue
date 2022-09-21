<template>
  <div class="flex justify-between">
    <StatusWithCircle :column="statusCounter" />

    <span class="font-medium">{{ statusCounter.count }}</span>
  </div>
</template>

<script setup lang="ts">
import { StatusGroup } from "../../../core/types/interfaces/statusGroup.interface";
import StatusWithCircle from "../../../shared/components/StatusWithCircle.vue";

defineProps<{
  statusCounter: StatusGroup;
}>();
</script>
