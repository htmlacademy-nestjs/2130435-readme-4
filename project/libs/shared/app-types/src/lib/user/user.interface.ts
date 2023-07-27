import { PhotoFormat } from "../..";

type LikedBlogId = string;
type SubscribeUserID = string;

export interface User {
  _id: string;
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
