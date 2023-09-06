import { Module } from '@nestjs/common';

import { BlogModule } from './blog/blog.module';
import { CommentModule } from './comment/comment.module';
import {PrismaModule} from "./prisma/prisma.module";

@Module({
  imports: [BlogModule, CommentModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
