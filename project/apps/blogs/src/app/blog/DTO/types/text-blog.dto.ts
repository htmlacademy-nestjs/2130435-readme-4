import { TextBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { CreateBlogTemplateDto } from "../template/blog-template.dto";

export class CreateTextBlogDto
extends CreateBlogTemplateDto
implements Pick<TextBlog, 'title' | 'announcement' | 'text'>{
  type: 'text';
  title: string;
  announcement: string;
  text: string;
}
