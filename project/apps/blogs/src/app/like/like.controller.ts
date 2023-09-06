import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {Controller, Delete, Headers, HttpCode, HttpStatus, Param, ParseIntPipe, Post} from "@nestjs/common";
import {HttpStatusCode} from "axios";
import {BlogService} from "../blog/blog.service";

@ApiTags('blogs')
@Controller('likes')
export class BlogController {
  constructor(
    // TODO: заменить на сервис лайков
    private readonly blogService: BlogService
  ) {
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Blog has been successfully liked.',
  })
  @Post([':id'])
  @HttpCode(HttpStatusCode.Ok)
  public async like(
    @Param('id', ParseIntPipe) id: number,
    @Headers() headers: {userID: string}
  ) {
    await this.blogService.like(id, headers.userID);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Blog has been successfully disliked.',
  })
  @Delete([':id'])
  @HttpCode(HttpStatusCode.Ok)
  public async dislike(
    @Param('id', ParseIntPipe) id: number,
    @Headers() headers: {userID: string}
  ) {
    await this.blogService.dislike(id, headers.userID);
  }

}
