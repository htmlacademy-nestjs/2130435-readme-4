import { PhotoFormat } from "./photo-format.type";

export type BlogType = 'video' | 'text' | 'quote' | 'photo' | 'link';


type UserId = string;
export type LikesMap = Record<UserId, true>

export type TagType = {
  tagId: number;
  title: string;
}

export interface BlogTemplate {
  _id?: string;
  authorId: string;
  creatorId: string;
  tags: TagType[];
  type: BlogType;
  createdAt: Date;
  publicAt: Date;
  updatedAt: Date;
}

export interface VideoBlog extends BlogTemplate {
  title?: string;
  videoLink?: string;
}

export interface TextBlog extends BlogTemplate {
  title?: string;
  announcement?: string;
  text?: string;
}

export interface QuoteBlog extends BlogTemplate {
  quote?: string;
  authorQuote?: string;
}

export interface PhotoBlog extends BlogTemplate {
  photo?: PhotoFormat;
  photoSize?: string;
}

export interface LinkBlog extends BlogTemplate {
  link?: string;
  description?: string;
}
