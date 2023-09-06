import { LinkBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { BlogTemplateRdo } from "../template/blog-template.rdo";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class LinkBlogRdo
extends BlogTemplateRdo
implements Pick<LinkBlog, 'description' | 'link'>{

  @ApiProperty({
    description: 'Blog type',
    example: 'link',
  })
  @Expose()
  link: string;

  @ApiProperty({
    description: 'Blog link',
    example: 'https://www.medium.com/javascript',
  })
  @Expose()
  description: string;
}
