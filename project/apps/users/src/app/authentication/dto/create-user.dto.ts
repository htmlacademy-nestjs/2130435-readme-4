import { ApiProperty } from "@nestjs/swagger";
import { PhotoFormat, User } from "@project/shared/app-types";

export class CreateUserDto implements Pick<
  User, 'email' | 'userAvatar' | 'username'
> {

  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  email: string;

  @ApiProperty({
    description: 'User username',
    example: 'KekaBestProGGEr'
  })
  username: string;

  @ApiProperty({
    description: 'User password',
    example: 'password123',
  })
  password: string;

  @ApiProperty({
    description: 'User avatar',
    example: 'my-photo.png',
    pattern: '.(png|jpg)$',
  })
  userAvatar?: PhotoFormat;
}
