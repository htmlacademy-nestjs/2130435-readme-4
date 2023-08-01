import { TextBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { BlogTemplateRdo } from "../template/blog-template.rdo";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class TextBlogRdo
extends BlogTemplateRdo
implements Pick<TextBlog, 'title' | 'announcement' | 'text'>{
  @ApiProperty({
    description: 'Blog text title',
    example: 'My first text',
  })
  @Expose()
  title: string;

  @ApiProperty({
    description: 'Blog announcement',
    example: 'My first announcement',
  })
  @Expose()
  announcement: string;

  @ApiProperty({
    description: 'Blog text',
    example: 'lorem ipsum',
  })
  @Expose()
  text: string;
}
