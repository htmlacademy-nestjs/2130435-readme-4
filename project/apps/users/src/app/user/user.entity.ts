import {User, PhotoFormat, SubscribeUserID, LikedBlogId } from '@project/shared/app-types'
import { Entity } from '@project/util/util-types'
import { genSalt, hash, compare } from 'bcrypt';
import { SALT_ROUNDS } from './user.constant';

export class UserEntity extends Entity<User> implements User {
  public _id: string;
  public email: string;
  public username: string;
  public passwordHash: string;
  public userAvatar?: PhotoFormat;
  public registrationDate: Date;
  public userBlogsCounter: number;
  public subcribesCounter: number;
  public feed: SubscribeUserID[];
  public likedBlogs: LikedBlogId[];

  constructor(user: User) {
    super(user);
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return await compare(password, this.passwordHash);
  }
}
