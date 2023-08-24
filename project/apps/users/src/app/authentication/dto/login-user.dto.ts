import { ApiProperty } from "@nestjs/swagger";
import { User } from "@project/shared/app-types";

export class LoginUserDto implements Pick<
  User, 'email'
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
  password: string;
}
