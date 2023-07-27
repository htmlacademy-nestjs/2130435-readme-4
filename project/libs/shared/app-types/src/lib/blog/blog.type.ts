import {LinkBlog, PhotoBlog, QuoteBlog, TextBlog, VideoBlog} from './blog.interface';

export type Blog =
  Omit<VideoBlog, 'type'> |
  Omit<TextBlog, 'type'> |
  Omit<QuoteBlog, 'type'> |
  Omit<PhotoBlog, 'type'> |
  Omit<LinkBlog, 'type'>;
