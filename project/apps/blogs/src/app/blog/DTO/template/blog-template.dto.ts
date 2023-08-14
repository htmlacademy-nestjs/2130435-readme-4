import { ApiProperty } from "@nestjs/swagger";
import { BlogType, LikesMap } from "libs/shared/app-types/src/lib/blog/blog.interface";

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
    description: 'Blog tags',
    example: '["2023", "dogs"]',
  })
  tags: string[];

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
