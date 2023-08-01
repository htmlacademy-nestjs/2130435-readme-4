import { VideoBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { CreateBlogTemplateDto } from "../template/blog-template.dto";

export class CreateVideoBlogDto
extends CreateBlogTemplateDto
implements Pick<VideoBlog, 'title' | 'videoLink'>{
  type: 'video';
  title: string;
  videoLink: string;
}
