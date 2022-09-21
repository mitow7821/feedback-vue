import { Feedback } from "../../core/models/feedback.model";
import { FeedbackStatus } from "../../core/types/enums/feebackStatus";
import { StatusGroup } from "../../core/types/interfaces/statusGroup.interface";

export default (feedbacks: Feedback[]): StatusGroup[] => {
  const colors = ["#D4CE7D", "#762A7E", "#A7E2E1"];

  return Object.values(FeedbackStatus).map((status, index) => {
    const filteredFeedbacks = feedbacks.filter((e) => e.status === status);

    return {
      status,
      color: colors[index],
      feedbacks: filteredFeedbacks,
      count: filteredFeedbacks.length,
    };
  });
};
