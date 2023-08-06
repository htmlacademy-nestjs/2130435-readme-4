import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class CommentRdo {

  @ApiProperty({
    description: 'Comment unique id',
    example: '123fsfrfxasECCEd21e',
  })
  @Expose({name: '_id'})
  id: string;

  @ApiProperty({
    description: 'Comment text',
    example: 'lorem ipsum',
  })
  @Expose()
  text: string;

  @ApiProperty({
    description: 'Blog unique id',
    example: '123fsfrfxasECCEd21e',
  })
  @Expose()
  blogId: string;

  @ApiProperty({
    description: 'User unique id',
    example: '123fsfrfxasECCEd21e',
  })
  @Expose()
  authorId: string;

  @ApiProperty({
    description: 'Created date',
    example: '12.04.2022',
  })
  @Expose()
  createdAt: Date;

  @ApiProperty({
    description: 'Updated date',
    example: '12.04.2022',
  })
  @Expose()
  updatedAt: Date;
}
