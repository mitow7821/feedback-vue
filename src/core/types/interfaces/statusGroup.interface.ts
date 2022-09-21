import { Feedback } from "../../models/feedback.model";
import { FeedbackStatus } from "../enums/feebackStatus";

export interface StatusGroup {
  status: FeedbackStatus;
  feedbacks: Feedback[];
  count: number;
  color: string;
}
