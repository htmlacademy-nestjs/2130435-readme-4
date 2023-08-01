import { PhotoBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { BlogTemplateRdo } from "../template/blog-template.rdo";
import { Expose } from "class-transformer";
import { PhotoFormat } from "@project/shared/app-types";

export class PhotoBlogRdo
extends BlogTemplateRdo
implements Pick<PhotoBlog, 'photo' | 'photoSize'>{

  @Expose()
  photo: PhotoFormat;

  @Expose()
  photoSize: string;
}
