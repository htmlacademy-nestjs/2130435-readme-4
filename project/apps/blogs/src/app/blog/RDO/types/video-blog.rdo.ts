import { VideoBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { BlogTemplateRdo } from "../template/blog-template.rdo";
import { Expose } from "class-transformer";

export class VideoBlogRdo
extends BlogTemplateRdo
implements Pick<VideoBlog, 'title' | 'videoLink'>{

  @Expose()
  title: string;

  @Expose()
  videoLink: string;
}
