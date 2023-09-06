import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentDto {
  @ApiProperty({
    description: 'Comment unique id',
    example: '123fsfrfxasECCEd21e',
  })
  _id: string;

  @ApiProperty({
    description: 'Comment text',
    example: 'lorem ipsum',
  })
  message: string;
}
