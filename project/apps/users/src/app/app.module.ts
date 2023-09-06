import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';
import { FeedModule } from './feed/feed.module';
import { RefreshTokenModule } from './refresh-token/refresh-token.module';
import {ConfigUsersModule, getMongooseOptions } from "@project/config/config-users";
import {MongooseModule} from "@nestjs/mongoose";
import {NotifyModule} from "./notify/notify.module";

@Module({
  imports: [
      AuthenticationModule,
      UserModule,
      FeedModule,
      RefreshTokenModule,
      NotifyModule,
      ConfigUsersModule,
      MongooseModule.forRootAsync(
        getMongooseOptions()
      )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
