import { Expose } from "class-transformer";
import { BlogType, likesMap } from "libs/shared/app-types/src/lib/blog/blog.interface";

export class BlogTemplateRdo {
  @Expose({name: '_id'})
  _id?: string;

  @Expose()
  authorId: string;

  @Expose()
  creatorId: string;

  @Expose()
  type: BlogType;

  @Expose()
  tags: string[];

  @Expose()
  isPublished: boolean;

  @Expose()
  publicAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  isRepost: boolean;

  @Expose()
  likesCounter: number;

  @Expose()
  likes: likesMap
}
