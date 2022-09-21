import { onBeforeMount } from "vue";
import { FeedbackInterface } from "../../core/types/interfaces/feedback.interface";
import { useFeedbacksStore } from "../store/feedbacks.store";

export default () => {
  const feedbacksStore = useFeedbacksStore();

  feedbacksStore.$subscribe((_, state) => {
    localStorage.setItem("feedbacks", JSON.stringify(state.feedbacks));
  });

  function isInstanceOfFeedback(e: unknown): e is FeedbackInterface {
    return (
      typeof e === "object" &&
      e !== null &&
      "title" in e &&
      "description" in e &&
      "category" in e &&
      "status" in e
    );
  }

  onBeforeMount(() => {
    if (feedbacksStore.feedbacks.length) {
      return;
    }

    const storageValue = localStorage.getItem("feedbacks");

    if (!storageValue) {
      return;
    }

    JSON.parse(storageValue).forEach((e: unknown) => {
      if (!isInstanceOfFeedback(e)) {
        return;
      }

      feedbacksStore.addFeedback(e);
    });
  });
};
