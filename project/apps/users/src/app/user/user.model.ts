import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from 'mongoose';
import {LikedBlogId, PhotoFormat, SubscribeUserID, User} from "@project/shared/app-types";

const INIT_DEFAULT_VALUE = 0

@Schema({
    collection: 'users',
    timestamps: true
})
export class UserModel extends Document implements User {
    @Prop({
        type: String
    })
    public userAvatar: PhotoFormat;

    @Prop({
        required: true,
    })
    public username: string;

    @Prop({
        required: true,
    })
    public passwordHash: string;

    @Prop({
        unique: true,
        required: true,
    })
    public email: string;

    @Prop({
        default: new Date()
    })
    public registrationDate: Date;

    @Prop({
        default: INIT_DEFAULT_VALUE
    })
    public userBlogsCounter: number;

    @Prop({
        default: INIT_DEFAULT_VALUE
    })
    public subcribesCounter: number;

    @Prop({
        type: [String],
        default: []
    })
    public feed: SubscribeUserID[];

    @Prop({
        type: [String],
        default: []
    })
    likedBlogs: LikedBlogId[];
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
