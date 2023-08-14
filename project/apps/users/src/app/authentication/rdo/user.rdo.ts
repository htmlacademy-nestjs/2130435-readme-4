import { ApiProperty } from "@nestjs/swagger";
import { LikedBlogId, PhotoFormat, SubscribeUserID } from "@project/shared/app-types";
import { Expose } from "class-transformer";

export class UserRdo {

  @ApiProperty({
    description: 'The uniq user ID',
    example: '13'
  })
  @Expose({name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User username',
    example: 'KekaBestProGGEr'
  })
  @Expose()
  public username: string;

  @ApiProperty({
    description: 'User avatar',
    example: 'my-photo.png',
    pattern: '.(png|jpg)$',
  })
  @Expose()
  userAvatar?: PhotoFormat;

  @ApiProperty({
    description: 'User egistration date',
    example: '12.04.2022',
    type: Date,
  })
  @Expose()
  public registrationDate: Date;

  @ApiProperty({
    description: 'User blog counter',
    example: '12',
    type: Number
  })
  @Expose()
  public userBlogsCounter: number;

  @ApiProperty({
    description: 'User subcribes counter',
    example: '12',
    type: Number
  })
  @Expose()
  public subcribesCounter: number;

  @ApiProperty({
    description: 'User feed',
    example: '[{blog1}, {blog2}]',
    isArray: true,
  })
  @Expose()
  public feed: SubscribeUserID[];

  @ApiProperty({
    description: 'User liked blogs',
    example: '[{blog1}, {blog2}]',
    isArray: true,
  })
  @Expose()
  public likedBlogs: LikedBlogId[];
}
