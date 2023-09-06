import { IsEmail, IsNotEmpty } from 'class-validator';
import {NotifyError} from "../email-subscriber.constant";

export class CreateSubscriberDto {
  @IsEmail({}, { message: NotifyError.EmailNotValid })
  public email: string;

  @IsNotEmpty({ message: NotifyError.UsernameIsEmpty })
  public username: string;
}
