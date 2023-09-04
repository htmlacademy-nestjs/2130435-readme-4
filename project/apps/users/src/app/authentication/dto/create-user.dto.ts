import { ApiProperty } from "@nestjs/swagger";
import { PhotoFormat, User } from "@project/shared/app-types";
import {IsEmail, IsString} from "class-validator";
import {AuthUserError} from "../authentication.constant";

export class CreateUserDto implements Pick<
  User, 'email' | 'userAvatar' | 'username'
> {

  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  @IsEmail({},{ message: AuthUserError.EmailNotValid })
  email: string;

  @ApiProperty({
    description: 'User username',
    example: 'KekaBestProGGEr'
  })
  @IsString()
  username: string;

  @ApiProperty({
    description: 'User password',
    example: 'password123',
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: 'User avatar',
    example: 'my-photo.png',
    pattern: '.(png|jpg)$',
  })
  @IsString()
  userAvatar?: PhotoFormat;
}
