import {Injectable} from "@nestjs/common";
import {CRUDRepository} from "@project/util/util-types";
import {PrismaService} from "../prisma/prisma.service";
import {BlogEntity} from "./blog.entity";
import {Blog} from "@project/shared/app-types";

@Injectable()
export class BlogPostRepository implements CRUDRepository<BlogEntity, number, Blog> {
  constructor(private readonly prisma: PrismaService) {
  }

  public async create(item: BlogEntity): Promise<Blog> {
    return this.prisma.post.create({
      data: {...item.toObject()}
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
      }
    });
  }

  public find(ids: number[] = []): Promise<Blog[]> {
    return this.prisma.post.findMany({
      where: {
        blogId: {
          in: ids.length > 0 ? ids : undefined
        }
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
