import { defineStore } from "pinia";
import { Comment } from "../../../../core/models/comment.model";

interface ReplyObject {
  replyReferenceTag: string;
  comment: Comment;
}

interface State {
  replyObject: ReplyObject | null;
}

export const usePreviewStore = defineStore("previewStore", {
  state: (): State => ({
    replyObject: null,
  }),
});
