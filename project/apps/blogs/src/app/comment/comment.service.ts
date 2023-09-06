import { Injectable } from "@nestjs/common";
import {CreateCommentDto} from "./dto/create-comment.dto";
import { CommentEntity } from "./comment.entity";
import {CommentRepository} from "./comment.repository";
import {Comment} from "@project/shared/app-types";
import {CommentQuery} from "./query/comment.query";

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentRepository
  ) {}

  async createComment(id: number,dto: CreateCommentDto, userId: string): Promise<Comment> {
    const commentEntity = new CommentEntity({ ...dto, userId, postId: id });
    return this.commentRepository.create(commentEntity);
  }

  async deleteComment(id: number, userId: string): Promise<void> {
    const deletingComment = await this.getComment(id);

    if (deletingComment.userId === userId) {
      this.commentRepository.destroy(id);
    }
  }

  async getComment(id: number): Promise<Comment> {
    return this.commentRepository.findById(id);
  }

  async getComments(query: CommentQuery): Promise<Comment[]> {
    return this.commentRepository.find(query);
  }
}
