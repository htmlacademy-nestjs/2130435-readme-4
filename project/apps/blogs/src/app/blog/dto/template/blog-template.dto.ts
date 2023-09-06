import { ApiProperty } from "@nestjs/swagger";
import {BlogType, LikesMap, TagType} from "libs/shared/app-types/src/lib/blog/blog.interface";

export class CreateBlogTemplateDto {

  @ApiProperty({
    description: 'Blog unique id',
    example: '123ed31ercef4124',
  })
  _id?: string;

  @ApiProperty({
    description: 'Blog type',
    example: 'video',
  })
  type: BlogType;

  @ApiProperty({
    example: '[{id: number, title: cat}]',
  })
  tags: TagType[];

  @ApiProperty({
    description: 'Blog published status',
    example: true,
  })
  isRepost: boolean;

  @ApiProperty({
    description: 'Blog likes counter',
    example: 12
  })
  likesCounter: number;

  @ApiProperty({
    description: 'Blog likes map',
    example: '{userId12321313: true, userId123ed2fsfsde: true}',
  })
  likes: LikesMap
}
