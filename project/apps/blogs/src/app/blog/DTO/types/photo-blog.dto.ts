import { PhotoBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { CreateBlogTemplateDto } from "../template/blog-template.dto";
import { PhotoFormat } from "@project/shared/app-types";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePhotoBlogDto
extends CreateBlogTemplateDto
implements Pick<PhotoBlog, 'photo' | 'photoSize'>{
  @ApiProperty({
    description: 'Blog type',
    example: 'photo',
  })
  type: 'photo';

  @ApiProperty({
    description: 'Blog photo',
    example: 'my-dog.jpg',
  })
  photo: PhotoFormat;

  @ApiProperty({
    description: 'Blog photo size',
    example: '564kb',
  })
  photoSize: string;
}
