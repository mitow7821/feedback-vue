import { v4 } from "uuid";
import { CommentInterface } from "../types/interfaces/comment.interface";
import { Reply } from "./reply.model";

export class Comment {
  value: string;
  avatar: string;
  createdBy: string;
  tag: string;
  replies: Reply[];
  id: string;

  constructor(comment: CommentInterface) {
    this.value = comment.value;
    this.createdBy = comment.createdBy;
    this.tag = comment.tag;
    this.replies = comment.replies?.map((reply) => new Reply(reply)) ?? [];
    this.avatar = "https://i.pravatar.cc/300";
    this.id = comment.id ?? v4();
  }

  addReply(reply: Reply) {
    this.replies.push(reply);
  }
}
