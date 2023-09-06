import { Module } from '@nestjs/common';

import { BlogModule } from './blog/blog.module';
import { CommentModule } from './comment/comment.module';
import {PrismaModule} from "./prisma/prisma.module";
import {NotifyModule} from "./notify/notify.module";

@Module({
  imports: [BlogModule, CommentModule, PrismaModule, NotifyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
