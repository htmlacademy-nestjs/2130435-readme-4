import { Controller, Param, Post, Get, Headers, Body, Query, Delete, Put, HttpCode } from "@nestjs/common";
import { BlogService } from "./blog.service";
import { CreateBlogTypeDto } from "./DTO/index.dto";
import { BlogType } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { BlogQueryOptions, MapTypeRdo } from "./blog.constant";
import { fillObject } from '@project/util/util-core';
import { BlogRdo } from "./RDO/index.rdo";
import { HttpStatusCode } from "axios";

@Controller('blogs')
export class FeedController {
  constructor(
    private readonly blogService: BlogService
  ) {}

  @Post(['type', ':type'])
  public async create(
    @Param('type') type: BlogType,
    @Headers() headers: {userID: string},
    @Body() body: CreateBlogTypeDto
  ): Promise<BlogRdo> {
    const blog =  await this.blogService.create(type, headers.userID, body);
    return fillObject(MapTypeRdo[type], blog);
  }

  @Get()
  public async index(
    @Query() page: number,
    @Query() limit: number,
    @Query() tag: string[],
    @Query() title: string,
    @Query() type: BlogType,
    @Query() sort: 'date' | 'like' | 'disc'
    ): Promise<BlogRdo[]> {
      const queryOptions: BlogQueryOptions = {
        page, limit, tag, title, type, sort
      };

      const blogs = await this.blogService.index(queryOptions);
      return blogs.map(blog => fillObject(MapTypeRdo[blog.type], blog));
  }

  @Get(':id')
  public async show(
    @Param('id') id: string
  ) {
    const blog = await this.blogService.findById(id);
    return fillObject(MapTypeRdo[blog.type], blog);
  }

  @Delete(':id')
  @HttpCode(HttpStatusCode.Ok)
  public async delete(
    @Param('id') id: string,
    @Headers() headers: {userID: string}
  ) {
    await this.blogService.delete(id, headers.userID);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Headers() headers: {userID: string},
    @Body() body: CreateBlogTypeDto
  ) {
    const updateBlog = await this.blogService.update(id, headers.userID, body);
    return fillObject(MapTypeRdo[body.type], updateBlog);
  }

  @Post([':id', 'like'])
  @HttpCode(HttpStatusCode.Ok)
  public async like(
    @Param('id') id: string,
    @Headers() headers: {userID: string}
  ) {
    await this.blogService.like(id, headers.userID);
  }

  @Delete([':id', 'like'])
  @HttpCode(HttpStatusCode.Ok)
  public async dislike(
    @Param('id') id: string,
    @Headers() headers: {userID: string}
  ) {
    await this.blogService.dislike(id, headers.userID);
  }
}

