import { Body, Controller, Delete, Get, Headers, HttpCode, Param, Post } from "@nestjs/common";
import { createCommentDto } from "./DTO/create-comment.dto";
import { fillObject } from "@project/util/util-core";
import { CommentRdo } from "./RDO/comment.rdo";
import { CommentService } from "./comment.service";
import { HttpStatusCode } from "axios";

@Controller('blogs')
export class CommentController {
  constructor(
    private readonly commentService: CommentService
  ) {}

  @Post([':id', 'comments'])
  public async create(
    @Param('id') id: string,
    @Headers() headers: {userID: string},
    @Body() body: createCommentDto
  ) {
    const newComment = await this.commentService.create(id, headers.userID, body);
    return fillObject(CommentRdo, newComment);
  }

  @Get([':id', 'comments'])
  public async index(
    @Param('id') id: string,
  ) {
    const comments = await this.commentService.indexComments(id);
    return comments.map(comment => fillObject(CommentRdo, comment));
  }

  @Delete([':id', 'comments', ':commentId'])
  @HttpCode(HttpStatusCode.Ok)
  public async delete(
    @Param('id') id: string,
    @Param('commentId') commentId: string,
    @Headers() headers: {userID: string}
  ) {
    await this.commentService.deleteComment(id,commentId, headers.userID);
  }
}
