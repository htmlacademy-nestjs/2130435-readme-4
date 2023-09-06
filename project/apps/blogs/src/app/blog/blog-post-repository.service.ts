import {Injectable} from "@nestjs/common";
import {CRUDRepository} from "@project/util/util-types";
import {PrismaService} from "../prisma/prisma.service";
import {BlogEntity} from "./blog.entity";
import {Blog} from "@project/shared/app-types";
import {PostQuery} from "./query/post.query";

@Injectable()
export class BlogPostRepository implements CRUDRepository<BlogEntity, number, Blog> {
  constructor(private readonly prisma: PrismaService) {
  }

  public async create(item: BlogEntity): Promise<Blog> {
    const entityData = item.toObject();
    return this.prisma.post.create({
      data: {
        ...entityData,
        comments: {
          connect: []
        },
        tags: {
          connect: entityData.tags.map(({tagId}) => ({
            tagId
          }))
        },
        likes: {
          connect: []
        },
      },
      include: {
        comments: true,
        likes: true,
        tags: true
      }
    });
  }

  public async destroy(blogId: number): Promise<void> {
    await this.prisma.post.delete({
      where: {
        blogId,
      }
    });
  }

  public findById(blogId: number): Promise<Blog | null> {
    return this.prisma.post.findFirst({
      where: {
        blogId
      },
      include: {
        comments: true,
        tags: true,
        likes: true
      }
    });
  }

  public find({ limit, sortDirection, page, type, sortType, tags }: PostQuery): Promise<Blog[]> {
    return this.prisma.post.findMany({
      where: {
        tags: {
          some: {
            tagId: {
              in: tags,
            }
          },
          AND: {
            type
          }
        },
        take: limit,
        include: {
          comments: true,
          tags: true,
          likes: true
        },
        orderBy: [
          {
            [sortType]: sortDirection
          }
        ],
        skip: page > 0 ? limit * (page - 1) : undefined,
      }
    });
  }

  public update(blogId: number, item: BlogEntity): Promise<Blog> {
    return this.prisma.post.update({
      where: {
        blogId
      },
      data: {...item.toObject(), blogId}
    });
  }
}
