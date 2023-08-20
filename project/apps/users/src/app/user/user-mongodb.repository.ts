import {Injectable} from "@nestjs/common";
import {CRUDRepository} from "@project/util/util-types";
import {UserEntity} from "./user.entity";
import {User} from "@project/shared/app-types";
import {InjectModel} from "@nestjs/mongoose";
import {UserModel} from "./user.model";
import {Model} from "mongoose";

@Injectable()
export class UserMongoDBRepository implements CRUDRepository<UserEntity, string, User> {
    constructor(
        @InjectModel(UserModel.name) private readonly userModel: Model<UserModel>
    ) {
    }

    public async create(item: UserEntity): Promise<User> {
        const newBlogUser = new this.userModel(item);
        return newBlogUser.save();
    }

    public async destroy(id: string): Promise<void> {
        this.userModel.deleteOne({id});
    }

    public async findById(id: string): Promise<User | null> {
        return this.userModel
            .findOne({_id: id})
            .exec();
    }

    public async findByEmail(email: string): Promise<User | null> {
        return this.userModel
            .findOne({email})
            .exec();
    }

    public async update(id: string, item: UserEntity): Promise<User> {
        return this.userModel
            .findByIdAndUpdate(id, item.toObject(), {new: true})
            .exec();
    }

    public async updatePassword(id: string, password: string): Promise<User | null> {
        const findUser = await this.findById(id)
        if (!findUser) {
            return null
        }

        const updatedUser = await new UserEntity(findUser).setPassword(password);
        await this.update(id, updatedUser);
        return await this.findById(id);
    }


    public async getFeed(id: string) {
        return this.userModel
            .findOne({_id: id}, {feed: 1})
            .exec()
    }

    public async subcribe(id: string, userId: string) {
        return this.userModel.updateOne(
            {
                _id: id
            },
            {
                $inc: {
                    subcribesCounter: 1
                },
                $push: {
                    feed: userId
                }
            }
        ).exec()
    }

    public async unSubcribe(id: string, userId: string) {
        return this.userModel.updateOne(
            {
                _id: id
            },
            {
                $inc: {
                    subcribesCounter: -1
                },
                $pull: {
                    feed: userId
                }
            }
        ).exec()
    }
}
