import { LinkBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { CreateBlogTemplateDto } from "../template/blog-template.dto";
import { ApiProperty } from "@nestjs/swagger";
import { Optional } from "@nestjs/common";

export class CreateLinkBlogDto
extends CreateBlogTemplateDto
implements Pick<LinkBlog, 'link' | 'description'>{

  @ApiProperty({
    description: 'Blog type',
    example: 'link',
  })
  type: 'link';

  @ApiProperty({
    description: 'Blog link',
    example: 'https://www.medium.com/javascript',
  })
  link: string;

  @ApiProperty({
    description: 'Blog link description',
    example: 'cool article of JavaScript',
  })
  @Optional()
  description: string;
}
