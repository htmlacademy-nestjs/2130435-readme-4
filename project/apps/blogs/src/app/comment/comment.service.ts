import { Injectable } from "@nestjs/common";
import { BlogMemoryRepository } from "../blog/blog-memory.repository";
import { createCommentDto } from "./dto/create-comment.dto";
import dayjs from "dayjs";
import { CommentEntity } from "./comment.entity";

@Injectable()
export class CommentService {
  constructor(
    private readonly blogRepository: BlogMemoryRepository
  ) {}

  public async create(id: string, userID: string, dto: createCommentDto) {
    const newComment = new CommentEntity({
      ...dto,
      blogId: id,
      authorId: userID,
      createdAt: dayjs().toDate(),
      updatedAt: dayjs().toDate(),
    })

    return this.blogRepository.addComment(id, newComment);
  }

  public async indexComments(id: string) {
    return this.blogRepository.getComments(id);
  }

  public async deleteComment(id: string, commentId: string,  userID: string) {
    return this.blogRepository.deleteComment(id,commentId, userID);
  }
}
