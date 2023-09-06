import {
  Controller,
  Param,
  Post,
  Get,
  Headers,
  Body,
  Query,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from "@nestjs/common";
import { BlogService } from "./blog.service";
import { CreateBlogTypeDto } from "./dto/index.dto";
import { MapTypeRdo } from "./blog.constant";
import { fillObject } from '@project/util/util-core';
import { BlogRdo } from "./rdo/index.rdo";
import { HttpStatusCode } from "axios";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { BlogType } from "libs/shared/app-types/src/lib/blog/blog.interface";
import {PostQuery} from "./query/post.query";

@ApiTags('blogs')
@Controller('blogs')
export class BlogController {
  constructor(
    private readonly blogService: BlogService
  ) {}


  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Blog has been successfully created.',
  })
  @Post(['type', ':type'])
  public async create(
    @Param('type') type: BlogType,
    @Headers() headers: {userID: string},
    @Body() body: CreateBlogTypeDto
  ): Promise<BlogRdo> {
    const blog =  await this.blogService.create(type, headers.userID, body);
    return fillObject(MapTypeRdo[type], blog);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Passed a list of blogs by search parameters',
    isArray: true,
  })
  @Get()
  public async index(
    @Query() query: PostQuery
    ): Promise<BlogRdo[]> {
      const blogs = await this.blogService.index(query);
      return blogs.map(blog => fillObject(MapTypeRdo[blog.type], blog));
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Passed a blog by id',
  })
  @Get(':id')
  public async show(
    @Param('id', ParseIntPipe) id: number
  ) {
    const blog = await this.blogService.findById(id);
    return fillObject(MapTypeRdo[blog.type], blog);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Blog has been successfully deleted.',
  })
  @Delete(':id')
  @HttpCode(HttpStatusCode.Ok)
  public async delete(
    @Param('id', ParseIntPipe) id: number,
    @Headers() headers: {userID: string}
  ) {
    await this.blogService.delete(id, headers.userID);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Blog has been successfully updated.',
  })
  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Headers() headers: {userID: string},
    @Body() body: CreateBlogTypeDto
  ) {
    const updateBlog = await this.blogService.update(id, headers.userID, body);
    return fillObject(MapTypeRdo[body.type], updateBlog);
  }
}


