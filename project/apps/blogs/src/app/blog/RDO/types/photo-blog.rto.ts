import { PhotoBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { BlogTemplateRdo } from "../template/blog-template.rdo";
import { Expose } from "class-transformer";
import { PhotoFormat } from "@project/shared/app-types";
import { ApiProperty } from "@nestjs/swagger";

export class PhotoBlogRdo
extends BlogTemplateRdo
implements Pick<PhotoBlog, 'photo' | 'photoSize'>{

  @ApiProperty({
    description: 'Blog photo',
    example: 'my-dog.jpg',
  })
  @Expose()
  photo: PhotoFormat;

  @ApiProperty({
    description: 'Blog photo size',
    example: '564kb',
  })
  @Expose()
  photoSize: string;
}
