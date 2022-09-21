import { defineStore } from "pinia";
import { Feedback } from "../../core/models/feedback.model";
import { StatusGroup } from "../../core/types/interfaces/statusGroup.interface";
import { useFeedbacksStore } from "../../shared/store/feedbacks.store";
import groupByStatus from "../../shared/utils/groupByStatus";
import { AvailableCategories, SortBy } from "./dashboard.types";

interface State {
  selectedCategory: AvailableCategories;
  sortBy: SortBy;
}

const filterByCategory = (
  feedback: Feedback,
  selectedCategory: AvailableCategories
) =>
  selectedCategory === "All" ? true : feedback.category === selectedCategory;

export const useDashboardStore = defineStore("dashboardStore", {
  state: (): State => {
    return {
      selectedCategory: "All",
      sortBy: SortBy.UPVOTES,
    };
  },

  getters: {
    filteredFeedbacks(state): Feedback[] {
      const fedbacksStore = useFeedbacksStore();

      return fedbacksStore.feedbacks.filter((feedback) =>
        filterByCategory(feedback, state.selectedCategory)
      );
    },

    statusesCounter(): StatusGroup[] {
      return groupByStatus(this.filteredFeedbacks);
    },
  },

  actions: {
    changeCategory(category: AvailableCategories) {
      this.$state.selectedCategory = category;
    },

    sortFeedbacks(feedbacks: Feedback[]) {
      return feedbacks.sort((a, b) => {
        switch (this.$state.sortBy) {
          case SortBy.UPVOTES:
            return b.upvotes - a.upvotes;

          case SortBy.COMMENTS:
            return b.comments.length - a.comments.length;
        }
      });
    },
  },
});
