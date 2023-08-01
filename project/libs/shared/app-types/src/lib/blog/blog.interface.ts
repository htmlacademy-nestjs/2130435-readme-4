import { PhotoFormat } from "./photo-format.type";
import { Comment } from "../comment/comment.interface";

export type BlogType = 'video' | 'text' | 'quote' | 'photo' | 'link';


type userId = string;
export type likesMap = Record<userId, true>

export interface BlogTemplate {
  _id?: string;
  authorId: string;
  creatorId: string;
  type: BlogType;
  tags: string[];
  createdAt: Date;
  isPublished: boolean;
  publicAt: Date;
  updatedAt: Date;
  isRepost: boolean;
  likesCounter: number;
  comments: Comment[];
  likes: likesMap
}

export interface VideoBlog extends BlogTemplate {
  type: "video";
  title: string;
  videoLink: string;
}

export interface TextBlog extends BlogTemplate {
  type: "text";
  title: string;
  announcement: string;
  text: string;
}

export interface QuoteBlog extends BlogTemplate {
  type: "quote";
  quote: string;
  authorQuote: string;
}

export interface PhotoBlog extends BlogTemplate {
  type: "photo";
  photo: PhotoFormat;
  photoSize: string;
}

export interface LinkBlog extends BlogTemplate {
  type: "link";
  link: string;
  description: string;
}
