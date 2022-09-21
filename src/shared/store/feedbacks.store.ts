import { defineStore } from "pinia";
import { Feedback } from "../../core/models/feedback.model";
import { FeedbackInterface } from "../../core/types/interfaces/feedback.interface";

interface State {
  feedbacks: Feedback[];
}

export const useFeedbacksStore = defineStore("feedbacksStore", {
  state: (): State => ({
    feedbacks: [],
  }),

  actions: {
    getOne(id: string): Feedback | undefined {
      return this.$state.feedbacks.find((feedback) => feedback.id === id);
    },

    addFeedback(payload: FeedbackInterface) {
      this.$state.feedbacks.unshift(new Feedback(payload));
    },

    updateFeedback(feedbackId: string, payload: FeedbackInterface) {
      const feedback = this.getOne(feedbackId);
      if (!feedback) return;

      Object.assign(feedback, payload);
    },

    removeFeedback(feedbackId: string) {
      this.$state.feedbacks = this.$state.feedbacks.filter(
        (feedback) => feedback.id !== feedbackId
      );
    },
  },
});
