import { ConflictException, Injectable } from "@nestjs/common";
import { UserMemoryRepository } from "../user/user-memory.repository";
import { FeedUserError } from "./feed.constant";

@Injectable()
export class FeedService {
  constructor(
    private readonly userRepository: UserMemoryRepository
  ) {}

  public async subcribe(id: string, userId: string) {
    const addedUser = (await this.userRepository.getFeed(id)).includes(userId);

    if (addedUser) {
      throw new ConflictException(FeedUserError.AlreadySubscribed);
    }

    const updateFeed = this.userRepository.subcribe(id, userId);
    return updateFeed
  }

  public async unSubcribe(id: string, userId: string) {
    const removedUser = (await this.userRepository.getFeed(id)).includes(userId);

    if (!removedUser) {
      throw new ConflictException(FeedUserError.NotFound);
    }

    const updateFeed = this.userRepository.unSubcribe(id, userId);
    return updateFeed
  }

  public async getFeed(id: string) {
    //TODO: реализовать в дальнейшем получение блогов от пользователей в подписках
    return this.userRepository.getFeed(id)
  }
}
