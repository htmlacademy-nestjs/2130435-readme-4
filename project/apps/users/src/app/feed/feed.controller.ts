import { Controller, Delete, Get, Headers, HttpStatus, Param, Post } from "@nestjs/common";
import { FeedService } from "./feed.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('feed')
@Controller('users')
export class FeedController {
  constructor(
    private readonly feedService: FeedService
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    description: 'The user has successfully subscribed.'
  })
  @Get('feed')
  public async show(@Headers() headers: {userID: string}) {
    return await this.feedService.getFeed(headers.userID);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has successfully subscribed.'
  })
  @Post(['subcribe', ':id'])
  public async subcribe(@Param('id') id: string, @Headers() headers: {userID: string}) {
    return await this.feedService.subcribe(id, headers.userID);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has successfully unsubscribed.'
  })
  @Delete(['subcribe', ':id'])
  public async unSubcribe(@Param('id') id: string, @Headers() headers: {userID: string}) {
    return await this.feedService.unSubcribe(id, headers.userID);
  }
}
