import { Module } from '@nestjs/common';
import {LikesService} from "./like.service";
import {LikeRepository} from "./like.repository";
import {JwtAccessStrategy} from "@project/shared/shared-guards";
import {LikesController} from "./like.controller";

@Module({
  imports: [],
  controllers: [LikesController],
  providers: [LikesService, LikeRepository, JwtAccessStrategy],
  exports: [LikeRepository],
})
export class LikesModule {}
