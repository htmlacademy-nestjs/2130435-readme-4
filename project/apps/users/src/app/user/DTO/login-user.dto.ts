import { User } from "@project/shared/app-types";

export class LoginUserDto implements Pick<
  User, 'email'
> {
  email: string;
  password: string;
}
