import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { UserModule } from '../user/user.module';
import {JwtModule} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";
import {getJwtOptions} from "@project/config/config-users";
import {NotifyModule} from "../notify/notify.module";
import {JwtAccessStrategy} from "@project/shared/shared-guards";

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions
    }),
    NotifyModule,
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, JwtAccessStrategy],
})
export class AuthenticationModule {}
