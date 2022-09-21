import { onBeforeMount } from "vue";
import { useFeedbacksStore } from "../store/feedbacks.store";

export default () => {
  const feedbacksStore = useFeedbacksStore();

  feedbacksStore.$subscribe((_, state) => {
    localStorage.setItem("feedbacks", JSON.stringify(state.feedbacks));
  });

  onBeforeMount(() => {
    if (feedbacksStore.feedbacks.length) {
      return;
    }

    const storageValue = localStorage.getItem("feedbacks");

    if (!storageValue) {
      return;
    }

    JSON.parse(storageValue).forEach((e: any) => {
      feedbacksStore.addFeedback(e);
    });
  });
};
