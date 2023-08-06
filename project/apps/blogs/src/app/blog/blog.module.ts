import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogMemoryRepository } from './blog-memory.repository';
import { BlogService } from './blog.service';

@Module({
  controllers: [BlogController],
  providers: [BlogService, BlogMemoryRepository],
})
export class BlogModule {}
