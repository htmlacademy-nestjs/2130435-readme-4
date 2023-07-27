import { PhotoFormat } from "./photo-format.type";

type BlogType = 'video' | 'text' | 'quote' | 'photo' | 'link';
type BlogState = 'published' | 'draft';

interface BlogTemplate {
  _id: string;
  title: string;
  authorId: string;
  creatorId: string;
  type: BlogType;
  tags: string[];
  createdAt: Date;
  state: BlogState;
  publicAt: Date;
  updatedAt: Date;
  isRepost: boolean;
  likesCounter: number;
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
