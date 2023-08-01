import { PhotoBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { CreateBlogTemplateDto } from "../template/blog-template.dto";
import { PhotoFormat } from "@project/shared/app-types";

export class CreatePhotoBlogDto
extends CreateBlogTemplateDto
implements Pick<PhotoBlog, 'photo' | 'photoSize'>{
  type: 'photo';
 photo: PhotoFormat;
 photoSize: string;
}
