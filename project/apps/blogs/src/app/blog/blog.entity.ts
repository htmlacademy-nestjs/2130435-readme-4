import { Blog, PhotoFormat } from '@project/shared/app-types'
import { Entity } from '@project/util/util-types'
import {BlogType, TagType} from 'libs/shared/app-types/src/lib/blog/blog.interface';

export class BlogEntity extends Entity<Blog> {
  _id?: string;
  authorId: string;
  creatorId: string;
  type: BlogType;
  isPublished: boolean;
  publicAt: Date;
  updatedAt: Date;

  //VIDEO
  title?: string;
  videoLink?: string;
  tags: TagType[];

  //TEXT
  //title: string;
  announcement?: string;
  text?: string;

  //QUOTE
  quote?: string;
  authorQuote?: string;

  //PHOTO
  photo?: PhotoFormat;
  photoSize?: string;

  //LINK
  link?: string;
  description?: string;

  constructor(blog: Blog) {
    super(blog);
  }
}
