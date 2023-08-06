import { ApiProperty } from "@nestjs/swagger";

export class createCommentDto {
  @ApiProperty({
    description: 'Comment unique id',
    example: '123fsfrfxasECCEd21e',
  })
  _id: string;

  @ApiProperty({
    description: 'Comment text',
    example: 'lorem ipsum',
  })
  text: string;
}
