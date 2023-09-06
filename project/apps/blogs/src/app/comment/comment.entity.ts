import { Comment } from "@project/shared/app-types";
import { Entity } from "@project/util/util-types";

export class CommentEntity extends Entity<Comment> {
  _id?: string;
  text: string;
  blogId: string;
  authorId: string;

  constructor(comment: Comment) {
    super(comment);
  }
}
