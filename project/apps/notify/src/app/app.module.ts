import { Module } from '@nestjs/common';
import {ConfigNotifyModule} from "@project/config/config-notify";
import {MongooseModule} from "@nestjs/mongoose";
import {getMongooseOptions} from "@project/util/util-core";
import {EmailSubscriberModule} from "./email-subscriber/email-subscriber.module";
import {EmailSubscriberController} from "./email-subscriber/email-subcriber.controller";
@Module({
  imports: [
    ConfigNotifyModule,
    MongooseModule.forRootAsync(getMongooseOptions('application.db')),
    EmailSubscriberModule,
  ],
  controllers: [EmailSubscriberController],
  providers: [],
})
export class AppModule {}
