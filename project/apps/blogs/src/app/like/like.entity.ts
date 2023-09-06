import {Entity} from "@project/util/util-types";
import {Like} from "@project/shared/app-types";

export class LikeEntity extends Entity<Like> {
  constructor(like: Like) {
    super(like);
  }
}
