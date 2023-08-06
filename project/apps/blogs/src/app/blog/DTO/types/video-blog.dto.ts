import { VideoBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { CreateBlogTemplateDto } from "../template/blog-template.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateVideoBlogDto
extends CreateBlogTemplateDto
implements Pick<VideoBlog, 'title' | 'videoLink'>{
  @ApiProperty({
    description: 'Blog type',
    example: 'link',
  })
  type: 'video';

  @ApiProperty({
    description: 'Blog title',
    example: 'my first video',
  })
  title: string;

  @ApiProperty({
    description: 'Blog video link',
    example: 'https://www.youtube.com/123ed31ercef4124',
  })
  videoLink: string;
}
