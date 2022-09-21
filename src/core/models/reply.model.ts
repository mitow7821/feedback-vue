import { v4 } from "uuid";
import { ReplyInterface } from "../types/interfaces/reply.interface";

export class Reply {
  value: string;
  avatar: string;
  createdBy: string;
  tag: string;
  replyReferenceTag: string;
  id: string;

  constructor(reply: ReplyInterface) {
    this.value = reply.value;
    this.createdBy = reply.createdBy;
    this.tag = reply.tag;
    this.replyReferenceTag = reply.replyReferenceTag;
    this.id = reply.id ?? v4();
    this.avatar = "https://i.pravatar.cc/300";
  }
}
