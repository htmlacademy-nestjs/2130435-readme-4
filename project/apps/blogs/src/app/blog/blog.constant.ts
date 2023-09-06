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

export const QUERY_STANDART_LIMIT = 25;
export const QUERY_START_PAGE = 1;
export const DEFAULT_SORT_DIRECTION = 'desc';

//TODO: нужно правильно определить тип
export const MapTypeRdo: Record<BlogType, any> = {
  link: LinkBlogRdo,
  photo: PhotoBlogRdo,
  quote: QuoteBlogRdo,
  text: TextBlogRdo,
  video: VideoBlogRdo
}
