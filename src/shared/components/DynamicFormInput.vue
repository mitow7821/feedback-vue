<template>
  <div class="flex flex-col p-0.5">
    <h3 class="font-semibold">
      {{ options.label }}
      <span v-if="options.isRequired" class="text-red-500">*</span>
    </h3>
    <span class="text-gray-600">{{ options.description }}</span>

    <component
      :is="options.tag"
      class="rounded p-2 bg-blue-50"
      :class="{
        'cursor-pointer': options.tag === 'select',
        'cursor-text': ['input', 'textarea'].includes(options.tag),
      }"
      v-bind="options.attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as any).value)"
    >
      <template v-if="options.tag === 'select'">
        <option
          v-for="(option, index) in options.selectOptions"
          :key="index"
          :value="option.value"
        >
          {{ option.name }}
        </option>
      </template>
    </component>

    <div v-if="errors.length">
      <span v-for="(error, index) in errors" :key="index" class="text-red-500">
        {{ error }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DynamicInputInterface } from "../../core/types/interfaces/dynamicInput.interface";

defineProps<{
  options: DynamicInputInterface;
  modelValue: unknown;
  errors: string[];
}>();
defineEmits(["update:modelValue"]);
</script>
