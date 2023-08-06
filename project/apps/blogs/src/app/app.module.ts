import { Module } from '@nestjs/common';

import { BlogModule } from './blog/blog.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [BlogModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
