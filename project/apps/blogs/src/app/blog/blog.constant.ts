import { BlogType } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { LinkBlogRdo, PhotoBlogRdo, QuoteBlogRdo, TextBlogRdo, VideoBlogRdo } from "./rdo/index.rdo";

export enum BlogError {
  NotFound = 'Type not found',
  NoAccess = 'User does not have access to this type',
}

export interface BlogQueryOptions {
  page?: number;
  limit?: number;
  tag?: string[];
  title?: string;
  type?: BlogType;
  sort?: 'date' | 'like' | 'desc';
}
export enum QueryDefault {
  Page = 1,
  Limit = 25,
  Direction = 'desc',
}

//TODO: нужно правильно определить тип
export const MapTypeRdo: Record<BlogType, any> = {
  link: LinkBlogRdo,
  photo: PhotoBlogRdo,
  quote: QuoteBlogRdo,
  text: TextBlogRdo,
  video: VideoBlogRdo
}
