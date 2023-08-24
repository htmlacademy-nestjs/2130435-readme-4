import { ConflictException, Injectable } from "@nestjs/common";
import { BlogMemoryRepository } from "./blog-memory.repository";
import { BlogType } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { CreateBlogTypeDto } from "./dto/index.dto";
import { BlogEntity } from "./blog.entity";
import dayjs from "dayjs";
import { BlogError, BlogQueryOptions } from "./blog.constant";
import { Blog } from "@project/shared/app-types";

@Injectable()
export class BlogService {
  constructor(
    private readonly blogRepository: BlogMemoryRepository
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
      isRepost: false,
      tags: body.tags.length ? [...body.tags] : [],
      likesCounter: 0,
      likes: {},
      isPublished: true
    } as Blog);

    //TODO: заделка на будущее
    switch (type) {
      case 'video':
        return await this.createVideoBlog(newBlog);
      case 'text':
        return await this.createTextBlog(newBlog);
      case 'quote':
        return await this.createQuoteBlog(newBlog);
      case 'photo':
        return await this.createPhotoBlog(newBlog);
      case 'link':
        return await this.createLinkBlog(newBlog);
      default:
        throw new ConflictException(BlogError.NotFound);
    }
  }

  public async index(options?: BlogQueryOptions) {
    return this.blogRepository.indexSearch(options);
  }

  public async findById(id: string) {
    return this.blogRepository.findById(id);
  }

  public async delete(id: string, userID: string) {
    const isVerify = (await this.blogRepository.findById(id)).authorId === userID;
    if (!isVerify) {
      throw new ConflictException(BlogError.NoAccess);
    }

    return this.blogRepository.destroy(id);
  }

  public async update(id: string, userID: string, body: CreateBlogTypeDto) {
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

  public async like(id: string, userID: string) {
    return await this.blogRepository.like(id, userID);
  }

  public async dislike(id: string, userID: string) {
    return await this.blogRepository.dislike(id, userID);
  }

  private async createVideoBlog(newBlog: BlogEntity) {
    return this.blogRepository.create(newBlog)
  }

  private async createTextBlog(newBlog: BlogEntity) {
    return this.blogRepository.create(newBlog)
  }

  private async createQuoteBlog(newBlog: BlogEntity) {
    return this.blogRepository.create(newBlog)
  }

  private async createPhotoBlog(newBlog: BlogEntity) {
    return this.blogRepository.create(newBlog)
  }

  private async createLinkBlog(newBlog: BlogEntity) {
    return this.blogRepository.create(newBlog)
  }
}
