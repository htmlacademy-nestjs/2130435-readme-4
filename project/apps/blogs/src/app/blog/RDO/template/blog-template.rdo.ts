import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { BlogType, likesMap } from "libs/shared/app-types/src/lib/blog/blog.interface";

export class BlogTemplateRdo {

  @ApiProperty({
    description: 'Blog unique id',
    example: '123ed31ercef4124',
  })
  @Expose({name: '_id'})
  _id?: string;

  @ApiProperty({
    description: 'author user unique id',
    example: '123ed31ercef4124',
  })
  @Expose()
  authorId: string;

  @ApiProperty({
    description: 'created user unique id',
    example: '123ed31ercef4124',
  })
  @Expose()
  creatorId: string;

  @ApiProperty({
    description: 'Blog type',
    example: 'video',
  })
  @Expose()
  type: BlogType;

  @ApiProperty({
    description: 'Blog tags',
    example: '["2023", "dogs"]',
  })
  @Expose()
  tags: string[];

  @ApiProperty({
    description: 'Blog published status',
    example: true,
  })
  @Expose()
  isPublished: boolean;

  @ApiProperty({
    description: 'Blog publication date',
    example: '12.04.2021',
  })
  @Expose()
  publicAt: Date;

  @ApiProperty({
    description: 'Blog updated date',
    example: '12.04.2021',
  })
  @Expose()
  updatedAt: Date;

  @ApiProperty({
    description: 'Blog repost status',
    example: true,
  })
  @Expose()
  isRepost: boolean;

  @ApiProperty({
    description: 'Blog likes counter',
    example: 12
  })
  @Expose()
  likesCounter: number;

  @ApiProperty({
    description: 'Blog likes map',
    example: '{userId12321313: true, userId123ed2fsfsde: true}',
  })
  @Expose()
  likes: likesMap
}
