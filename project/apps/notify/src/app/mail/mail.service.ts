import { Subscriber } from '@project/shared/app-types';
import {Inject, Injectable} from '@nestjs/common';
import { EMAIL_ADD_SUBSCRIBER_SUBJECT } from './mail.constant';
import { MailerService } from '@nestjs-modules/mailer';
import {notifyConfig} from "@project/config/config-notify";
import {ConfigType} from "@nestjs/config";

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,

    @Inject(notifyConfig.KEY)
    private readonly serviceConfig: ConfigType<typeof notifyConfig>,
  ) {}

  public async sendNotifyNewSubscriber(subscriber: Subscriber) {
    await this.mailerService.sendMail({
      from: this.serviceConfig.mail.from,
      to: subscriber.email,
      subject: EMAIL_ADD_SUBSCRIBER_SUBJECT,
      template: './add-subscriber',
      context: {
        username: `${subscriber.username}`,
        email: `${subscriber.email}`,
      }
    })
  }
}
