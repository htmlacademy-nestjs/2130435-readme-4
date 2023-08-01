import { TextBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { BlogTemplateRdo } from "../template/blog-template.rdo";
import { Expose } from "class-transformer";

export class TextBlogRdo
extends BlogTemplateRdo
implements Pick<TextBlog, 'title' | 'announcement' | 'text'>{

  @Expose()
  title: string;

  @Expose()
  announcement: string;

  @Expose()
  text: string;
}
