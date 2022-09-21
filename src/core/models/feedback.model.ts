import { FeedbackStatus } from "../types/enums/feebackStatus";
import { FeedbackCategory } from "../types/feedbackCategory";
import { FeedbackInterface } from "../types/interfaces/feedback.interface";
import { Comment } from "./comment.model";
import { v4 } from "uuid";

export class Feedback {
  public title: string;
  public description: string;
  public category: FeedbackCategory;
  public status: FeedbackStatus;
  public upvotes: number;
  public comments: Comment[];
  public id: string;

  constructor(feedback: FeedbackInterface) {
    this.title = feedback.title;
    this.description = feedback.description;
    this.category = feedback.category;
    this.status = feedback.status;
    this.upvotes = feedback.upvotes ?? 0;
    this.comments =
      feedback.comments?.map((comment) => new Comment(comment)) ?? [];
    this.id = feedback.id ?? v4();
  }

  public upvote() {
    this.upvotes += 1;
  }

  public addComment(comment: Comment) {
    this.comments.push(comment);
  }
}
