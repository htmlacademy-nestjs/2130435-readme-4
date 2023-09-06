import { Inject, Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { ConfigType } from '@nestjs/config';
import { RabbitRouting } from '@project/shared/app-types';
import {NotifyDto} from "./dto/notify.dto";
import {rabbitConfig} from "@project/config/config-users";

@Injectable()
export class NotifyService {
  constructor(
    private readonly rabbitClient: AmqpConnection,
    @Inject(rabbitConfig.KEY)
    private readonly rabbitOptions: ConfigType<typeof rabbitConfig>,
  ) { }

  public async sendNews(dto: NotifyDto) {
    return this.rabbitClient.publish<NotifyDto>(
      this.rabbitOptions.exchange,
      RabbitRouting.NotifyPost,
      { ...dto }
    );
  }
}
