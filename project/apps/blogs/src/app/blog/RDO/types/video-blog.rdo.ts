import { VideoBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { BlogTemplateRdo } from "../template/blog-template.rdo";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class VideoBlogRdo
extends BlogTemplateRdo
implements Pick<VideoBlog, 'title' | 'videoLink'>{
  @ApiProperty({
    description: 'Blog title',
    example: 'my first video',
  })
  @Expose()
  title: string;

  @ApiProperty({
    description: 'Blog video link',
    example: 'https://www.youtube.com/123ed31ercef4124',
  })
  @Expose()
  videoLink: string;
}
