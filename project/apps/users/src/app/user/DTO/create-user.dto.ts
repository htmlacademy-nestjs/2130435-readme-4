import { PhotoFormat, User } from "@project/shared/app-types";

export class CreateUserDto implements Pick<
  User, 'email' | 'userAvatar' | 'username'
> {
  email: string;
  username: string;
  password: string;
  userAvatar?: PhotoFormat;
}
