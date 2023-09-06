import { ApiProperty } from "@nestjs/swagger";
import { User } from "@project/shared/app-types";
import {IsEmail, IsString} from "class-validator";
import {AuthUserError} from "../authentication.constant";

export class LoginUserDto implements Pick<
  User, 'email'
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
  password: string;
}
