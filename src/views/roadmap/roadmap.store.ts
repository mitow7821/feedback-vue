import { defineStore } from "pinia";
import { useFeedbacksStore } from "../../shared/store/feedbacks.store";
import groupByStatus from "../../shared/utils/groupByStatus";

export const useRoadmapStore = defineStore("roadmapStore", {
  getters: {
    columns() {
      const feedbacksStore = useFeedbacksStore();

      return groupByStatus(feedbacksStore.feedbacks);
    },
  },
});
