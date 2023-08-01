import { BlogType, likesMap } from "libs/shared/app-types/src/lib/blog/blog.interface";

export class CreateBlogTemplateDto {
  _id?: string;
  type: BlogType;
  tags: string[];
  isRepost: boolean;
  likesCounter: number;
  likes: likesMap
}
