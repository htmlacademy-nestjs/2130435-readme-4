import {LinkBlog, PhotoBlog, QuoteBlog, TextBlog, VideoBlog} from './blog.interface';

export type Blog = VideoBlog | TextBlog | QuoteBlog | PhotoBlog | LinkBlog;
