import { ConflictException, Injectable } from "@nestjs/common";
import { BlogType } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { CreateBlogTypeDto } from "./dto/index.dto";
import { BlogEntity } from "./blog.entity";
import dayjs from "dayjs";
import { BlogError } from "./blog.constant";
import { Blog } from "@project/shared/app-types";
import {PostQuery} from "./query/post.query";
import {BlogPostRepository} from "./blog-post-repository.service";

@Injectable()
export class BlogService {
  constructor(
    private readonly blogRepository: BlogPostRepository
  ) {}

  //TODO: подумать над типом
  public async create(type: BlogType, userID: string, body: CreateBlogTypeDto) {
    const newBlog = new BlogEntity({
      ...body,
      createdAt: dayjs().toDate(),
      updatedAt: dayjs().toDate(),
      publicAt: dayjs().toDate(),
      authorId: userID,
      creatorId: userID,
    } as Blog);

    return this.blogRepository.create(newBlog);
  }

  public async index(query?: PostQuery) {
    return this.blogRepository.find(query);
  }

  public async findById(id: number) {
    return this.blogRepository.findById(id);
  }

  public async delete(id: number, userID: string) {
    const isVerify = (await this.blogRepository.findById(id)).authorId === userID;
    if (!isVerify) {
      throw new ConflictException(BlogError.NoAccess);
    }

    return this.blogRepository.destroy(id);
  }

  public async update(id: number, userID: string, body: CreateBlogTypeDto) {
    const oldBlog = await this.blogRepository.findById(id);
    const isVerify = oldBlog.authorId === userID;
    if (!isVerify) {
      throw new ConflictException(BlogError.NoAccess);
    }

    const updateBlog = new BlogEntity({
      ...oldBlog,
      ...body,
      updatedAt: dayjs().toDate(),
    })

    return this.blogRepository.update(id, updateBlog);
  }
}
