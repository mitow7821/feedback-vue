import { ReplyInterface } from "./reply.interface";

export interface CommentInterface {
  value: string;
  replies?: ReplyInterface[];
  createdBy: string;
  tag: string;
  id?: string;
}
