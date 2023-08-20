import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';
import { FeedModule } from './feed/feed.module';
import { RefreshTokenModule } from './refresh-token/refresh-token.module';
import {ConfigUsersModule} from "@project/config/config-users";

@Module({
  imports: [AuthenticationModule, UserModule, FeedModule, RefreshTokenModule, ConfigUsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
