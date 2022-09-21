import { FeedbackCategory } from "../../core/types/feedbackCategory";

type AvailableCategories = FeedbackCategory | "All";

enum SortBy {
  UPVOTES = "Most Upvotes",
  COMMENTS = "Most Comments",
}

export { SortBy };
export type { AvailableCategories };
