import { RandomUUIDOptions } from "crypto";
import { PhotoFormat } from "../..";

export type LikedBlogId = string;
export type SubscribeUserID = string;

export interface User {
  _id?: string | RandomUUIDOptions;
  email: string;
  username: string;
  passwordHash: string;
  userAvatar?: PhotoFormat;
  registrationDate: Date;
  userBlogsCounter: number;
  subcribesCounter: number;
  feed: SubscribeUserID[];
  likedBlogs: LikedBlogId[];
}
