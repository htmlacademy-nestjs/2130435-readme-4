import { LikedBlogId, PhotoFormat, SubscribeUserID } from "@project/shared/app-types";
import { Expose } from "class-transformer";

export class UserRdo {
  @Expose({name: '_id'})
  public id: string;

  @Expose()
  public email: string;

  @Expose()
  public username: string;

  @Expose()
  userAvatar?: PhotoFormat;

  @Expose()
  public registrationDate: Date;

  @Expose()
  public userBlogsCounter: number;

  @Expose()
  public subcribesCounter: number;

  @Expose()
  public feed: SubscribeUserID[];

  @Expose()
  public likedBlogs: LikedBlogId[];
}
