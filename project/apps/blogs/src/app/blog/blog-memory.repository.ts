import { CRUDRepository } from "@project/util/util-types";
import { Blog } from "@project/shared/app-types";
import { randomUUID } from "crypto";
import { ConflictException, Injectable } from "@nestjs/common";
import { BlogEntity } from "./blog.entity";
import { BlogError, BlogQueryOptions, QUERY_STANDART_LIMIT, QUERY_START_PAGE } from "./blog.constant";
import dayjs from "dayjs";
import { CommentEntity } from "../comment/comment.entity";

@Injectable()
export class BlogMemoryRepository implements CRUDRepository<BlogEntity, string, Blog> {
  private repository: Record<string, Blog> = {};

  public async create(item: BlogEntity): Promise<Blog> {
    const entry = {
      ...item.toObject(), _id: randomUUID(),
    };

    this.repository[entry._id] = entry;
    return entry;
  }

public async indexSearch({limit = QUERY_STANDART_LIMIT, page = QUERY_START_PAGE, sort, tag, title: searchTitle, type}: BlogQueryOptions): Promise<Blog[]> {
    let result = Object.values(this.repository);
    if (sort) {
      this.sortQuery(sort, result);
    }
    if (tag) {
      result = result.filter((blog) => {
        return blog.tags.every((tagName) => {
          tag.includes(tagName);
        })
      });
    }

    if (type) {
      result = result.filter((blog) => {
        return blog.type === type;
      });
    }

    return result.slice((page - 1) * limit, page * limit);
  }

  private sortQuery(sort: 'date' | 'like' | 'disc', array: Blog[]): Blog[] {
    return array.sort((a, b) => {
      switch (sort) {
        case 'date':
          return dayjs(a.updatedAt).date() - dayjs(b.updatedAt).date();
        case 'like':
          return a.likesCounter - b.likesCounter;
        case 'disc':
          return 0
      }
    })

  }

  public async findById(id: string): Promise<Blog | null> {
    if (this.repository[id]) {
      return {...this.repository[id]}
    }

    return null;
  }

  public async update(id: string, item: BlogEntity): Promise<Blog> {
    if (!this.repository[id]) {
      return null
    }

    this.repository[id] = {...item.toObject(), _id: id};
    return this.repository[id];
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async like(id: string, userID: string) {
    if (!this.repository[id].likes[userID]) {
      return null
    }
    this.repository[id].likesCounter++;
    this.repository[id].likes[userID] = true;
    return null
  }

  public async dislike(id: string, userID: string) {
    if (this.repository[id].likes[userID]) {
      return null
    }
    this.repository[id].likesCounter--;
    delete this.repository[id].likes[userID];
    return null
  }

  public async addComment(id: string, comment: CommentEntity) {
    const entry = {
      ...comment.toObject(), _id: randomUUID(),
    }

    this.repository[id].comments.push(entry);
    return entry;
  }

  public async getComments(id: string) {
    return await this.repository[id].comments
  }

  public async deleteComment(id: string,commentId, userID: string) {
    const foundComment = this.repository[id].comments.find((comment) => comment._id === commentId);

    if (foundComment.authorId === userID) {
      return new ConflictException(BlogError.NoAccess)
    }

    this.repository[id].comments = this.repository[id].comments.filter((comment) => comment._id !== commentId);

    return null
  }

}
