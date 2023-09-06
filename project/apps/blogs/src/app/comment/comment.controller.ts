import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post, Query,
  Req,
  UseGuards
} from "@nestjs/common";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { fillObject } from "@project/util/util-core";
import { CommentRdo } from "./rdo/comment.rdo";
import { CommentService } from "./comment.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import {JwtAuthGuard} from "@project/shared/shared-guards";
import {RequestWithUserPayload} from "@project/shared/app-types";
import {CommentQuery} from "./query/comment.query";

@ApiTags('comments')
@Controller('comments')
export class CommentController {
  constructor(
    private readonly commentsService: CommentService
  ) {}

  @ApiResponse({
    status:HttpStatus.CREATED,
    description: 'Comment for blog post has been successfully created.'
  })
  @UseGuards(JwtAuthGuard)
  @Post(':id')
  public async create(@Param('commentId') id: number, @Body() dto: CreateCommentDto, @Req() {user}:RequestWithUserPayload) {
    const userId = user.sub;
    const newComment = await this.commentsService.createComment(id, dto, userId);
    return fillObject(CommentRdo, newComment);
  }

  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Comment not found.'
  })
  @Get([':postId'])
  public async showByPostId(@Param('postId') id: number, @Query() query:CommentQuery) {
    const comments = await this.commentsService.getComments(query);
    return fillObject(CommentRdo, comments);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Comment for blog post has been successfully deleted.',
  })
  @UseGuards(JwtAuthGuard)
  @Delete(([':commentId']))
  public async remove( @Param('commentId') id: number, @Req() {user}:RequestWithUserPayload) {
    const userId = user.sub;
    return await this.commentsService.deleteComment(id, userId);
  }
}
