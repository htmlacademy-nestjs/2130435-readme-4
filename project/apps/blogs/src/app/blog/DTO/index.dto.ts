import { CreateLinkBlogDto } from "./types/link-blog.dto";
import { CreatePhotoBlogDto } from "./types/photo-blog.dto";
import { CreateTextBlogDto } from "./types/text-blog.dto";
import { CreateVideoBlogDto } from "./types/video-blog.dto";

export type CreateBlogTypeDto = CreateVideoBlogDto | CreateTextBlogDto | CreatePhotoBlogDto | CreateLinkBlogDto;

export { CreateLinkBlogDto } from "./types/link-blog.dto";
export { CreatePhotoBlogDto } from "./types/photo-blog.dto";
export { CreateTextBlogDto } from "./types/text-blog.dto";
export { CreateVideoBlogDto } from "./types/video-blog.dto";
