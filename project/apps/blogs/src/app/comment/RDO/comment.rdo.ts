import { Expose } from "class-transformer";

export class CommentRdo {

  @Expose({name: '_id'})
  id: string;

  @Expose()
  text: string;

  @Expose()
  blogId: string;

  @Expose()
  authorId: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
