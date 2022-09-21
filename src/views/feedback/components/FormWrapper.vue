<template>
  <div class="max-w-[700px] mx-auto flex flex-col gap-5 h-full overflow-hidden">
    <button class="mr-auto" @click="$router.go(-1)">&lt; Go Back</button>

    <div
      class="bg-white rounded-md shadow p-5 overflow-hidden flex flex-col gap-4 grow"
    >
      <h1 class="text-xl font-semibold">{{ heading }}</h1>

      <form
        class="flex flex-col gap-3 overflow-hidden grow"
        @submit.prevent="onSumbit"
      >
        <div class="flex flex-col gap-3 overflow-auto">
          <DynamicFormInput
            v-for="element in formElements"
            :key="element.formDataKey"
            v-model="formData[element.formDataKey]"
            :options="element.dynamicInputOptions"
            :errors="
              formErrors
                .filter((e) => e.property === element.formDataKey)
                .map((e) => e.value)
            "
          />
        </div>

        <div class="flex gap-3 justify-between mt-auto">
          <button
            v-if="!!props.initialFormData"
            type="button"
            class="button | bg-red-500"
            @click="$emit('removeFeedback')"
          >
            Remove
          </button>

          <div class="flex gap-3 ml-auto">
            <button
              type="button"
              class="button | bg-sky-900"
              @click="$router.go(-1)"
            >
              Cancel
            </button>

            <button type="submit" class="button | bg-purple-600">
              {{ submitButtonValue }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { Feedback } from "../../../core/models/feedback.model";
import { FeedbackStatus } from "../../../core/types/enums/feebackStatus";
import { DynamicInputInterface } from "../../../core/types/interfaces/dynamicInput.interface";
import { FeedbackInterface } from "../../../core/types/interfaces/feedback.interface";
import DynamicFormInput from "../../../shared/components/DynamicFormInput.vue";
import { feedbackCategories } from "../../../shared/constants/feedbackCategories";

defineEmits(["removeFeedback"]);
const props = defineProps<{
  heading: string;
  initialFormData?: Feedback;
  submitButtonValue: string;
  submitHandler: (data: FeedbackInterface) => void;
}>();

interface FormError {
  property: keyof typeof formData;
  value: string;
}

const formErrors = ref<FormError[]>([]);
const formData = reactive({
  title: props.initialFormData?.title ?? "",
  category: props.initialFormData?.category ?? "Feature",
  status: props.initialFormData?.status ?? FeedbackStatus.PLANNED,
  description: props.initialFormData?.description ?? "",
});

interface FormElement {
  dynamicInputOptions: DynamicInputInterface;
  formDataKey: keyof typeof formData;
  hidden?: boolean;
}

const formElements = computed(() => {
  const base: FormElement[] = [
    {
      dynamicInputOptions: {
        tag: "input",
        label: "Feedback Title",
        description: "Add a short, descriptive title",
        isRequired: true,
      },
      formDataKey: "title",
    },
    {
      dynamicInputOptions: {
        tag: "select",
        label: "Category",
        description: "Lorem ipsum dolor sit amen",
        selectOptions: feedbackCategories.map((category) => ({
          name: category,
          value: category,
        })),
      },
      formDataKey: "category",
    },
    {
      dynamicInputOptions: {
        tag: "select",
        label: "Status",
        description: "Lorem ipsum dolor sit amen",
        selectOptions: Object.values(FeedbackStatus).map((status) => ({
          name: status,
          value: status,
        })),
      },
      formDataKey: "status",
      hidden: !props.initialFormData,
    },
    {
      dynamicInputOptions: {
        tag: "textarea",
        label: "Feedback Detail",
        description: "Lorem ipsum dolor sit amen",
        attrs: { maxlength: 250, rows: 4 },
        isRequired: true,
      },
      formDataKey: "description",
    },
  ];

  return base.filter((e) => !e?.hidden);
});

function validateForm() {
  formErrors.value = [];

  if (!formData.title) {
    formErrors.value.push({ property: "title", value: "Title is required!" });
  }

  if (!formData.description) {
    formErrors.value.push({
      property: "description",
      value: "Description is required!",
    });
  }

  if (formData.description.length > 250) {
    formErrors.value.push({
      property: "description",
      value: "Description can't be longer than 250 characters!",
    });
  }

  return !formErrors.value.length;
}

function onSumbit() {
  const isFormValid = validateForm();

  if (isFormValid) {
    props.submitHandler(formData);
  }
}
</script>
