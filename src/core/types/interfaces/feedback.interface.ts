import { FeedbackStatus } from "../enums/feebackStatus";
import { FeedbackCategory } from "../feedbackCategory";
import { CommentInterface } from "./comment.interface";

export interface FeedbackInterface {
  title: string;
  description: string;
  category: FeedbackCategory;
  status: FeedbackStatus;
  upvotes?: number;
  comments?: CommentInterface[];
  id?: string;
}
