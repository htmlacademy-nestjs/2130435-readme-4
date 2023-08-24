import { Module } from '@nestjs/common';
import { UserMemoryRepository } from './user-memory.repository';
import {MongooseModule} from "@nestjs/mongoose";
import {UserModel, UserSchema} from "./user.model";
import {UserMongoDBRepository} from "./user-mongodb.repository";

@Module({
  imports: [
      MongooseModule.forFeature([
          {name: UserModel.name, schema: UserSchema}
      ])
  ],
  providers: [UserMemoryRepository, UserMongoDBRepository],
  exports: [UserMemoryRepository, UserMongoDBRepository],
})
export class UserModule {}
