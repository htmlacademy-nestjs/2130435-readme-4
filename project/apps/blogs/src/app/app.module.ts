import { Module } from '@nestjs/common';

import { BlogModule } from './blog/blog.module';
import { CommentModule } from './comment/comment.module';
import {PrismaModule} from "./prisma/prisma.module";
import {NotifyModule} from "./notify/notify.module";
import {LikesModule} from "./like/like.module";

@Module({
  imports: [BlogModule, CommentModule, PrismaModule, NotifyModule, LikesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
