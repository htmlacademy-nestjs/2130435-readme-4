import { Module } from '@nestjs/common';
import { BlogMemoryRepository } from '../blog/blog-memory.repository';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';

@Module({
  providers: [BlogMemoryRepository, CommentService],
  controllers: [CommentController],
  exports: [CommentService]
})
export class CommentModule {}
