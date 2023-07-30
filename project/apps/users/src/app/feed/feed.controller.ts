import { Controller, Delete, Get, Headers, Param, Post } from "@nestjs/common";
import { FeedService } from "./feed.service";

@Controller('users')
export class FeedController {
  constructor(
    private readonly feedService: FeedService
  ) {}

  @Get('feed')
  public async show(@Headers() headers: {userID: string}) {
    return await this.feedService.getFeed(headers.userID);
  }

  @Post(['subcribe', ':id'])
  public async subcribe(@Param('id') id: string, @Headers() headers: {userID: string}) {
    return await this.feedService.subcribe(id, headers.userID);
  }

  @Delete(['subcribe', ':id'])
  public async unSubcribe(@Param('id') id: string, @Headers() headers: {userID: string}) {
    return await this.feedService.unSubcribe(id, headers.userID);
  }
}
