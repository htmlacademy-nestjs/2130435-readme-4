import { TextBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { CreateBlogTemplateDto } from "../template/blog-template.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTextBlogDto
extends CreateBlogTemplateDto
implements Pick<TextBlog, 'title' | 'announcement' | 'text'>{
  @ApiProperty({
    description: 'Blog type',
    example: 'text',
  })
  type: 'text';

  @ApiProperty({
    description: 'Blog text title',
    example: 'My first text',
  })
  title: string;

  @ApiProperty({
    description: 'Blog announcement',
    example: 'My first announcement',
  })
  announcement: string;

  @ApiProperty({
    description: 'Blog text',
    example: 'lorem ipsum',
  })
  text: string;
}
