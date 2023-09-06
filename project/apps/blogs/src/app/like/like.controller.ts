import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {Controller, Get, HttpStatus, Param, Post, Req} from "@nestjs/common";
import {LikesService} from "./like.service";
import {fillObject} from "@project/util/util-core";
import {LikeRdo} from "./rdo/like.rdo";
import {RequestWithUserPayload} from "@project/shared/app-types";

@ApiTags('blogs')
@Controller('likes')
export class LikesController {
  constructor(
    private readonly likesService: LikesService,
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: "Likes has been successfully changed."
  })
  @Post('/:postId')
  public async changeLikeStatus(@Param('postId') id: number, @Req() { user }: RequestWithUserPayload ) {
    const newLike = await this.likesService.changePostLike(id, user.sub);
    return fillObject(LikeRdo, newLike);
  }

  @ApiResponse({
    status: HttpStatus.OK,
  })
  @Get('/:postId')
  public async getLikes(@Param('postId') id: number) {
    const likeInfo = await this.likesService.findByPostId(id);
    return fillObject(LikeRdo, likeInfo);
  }
}
