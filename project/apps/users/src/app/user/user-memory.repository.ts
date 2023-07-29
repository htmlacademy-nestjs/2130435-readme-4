import { CRUDRepository } from "@project/util/util-types";
import { UserEntity } from "./user.entity";
import { User } from "@project/shared/app-types";
import { randomUUID } from "crypto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserMemoryRepository implements CRUDRepository<UserEntity, string, User> {
  private repository: Record<string, User> = {};

  public async create(item: UserEntity): Promise<User> {
    const entry = {...item.toObject(), _id: randomUUID()};
    this.repository[entry._id] = entry;
    return entry;
  }

  public async findById(id: string): Promise<User | null> {
    if (this.repository[id]) {
      return {...this.repository[id]}
    }

    return null;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const existUser = Object.values(this.repository)
      .find((user) => user.email === email);

    if (!existUser) {
      return null;
    }

    return {...existUser};
  }

  public async update(id: string, item: UserEntity): Promise<User> {
    if (!this.repository[id]) {
      return null
    }

    this.repository[id] = {...item.toObject(), _id: id};
    return this.repository[id];
  }

  public async updatePassword(id: string, password: string): Promise<User | null> {
    if (!this.repository[id]) {
      return null
    }

    const {passwordHash: newPassword} = await new UserEntity(this.repository[id]).setPassword(password);
    this.repository[id] = {...this.repository[id], passwordHash: newPassword};
    return this.repository[id];
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }
}
