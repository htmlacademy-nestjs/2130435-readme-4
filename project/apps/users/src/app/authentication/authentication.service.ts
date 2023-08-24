import { ConflictException, Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { UserEntity } from '../user/user.entity';
import { AuthUserError } from './authentication.constant';
import {LoginUserDto} from "./dto/login-user.dto";
import {CreateUserDto} from "./dto/create-user.dto";
import {UserMongoDBRepository} from "../user/user-mongodb.repository";

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userRepository: UserMongoDBRepository
  ) {}

  public async register(dto: CreateUserDto) {
    const {email, password, username, userAvatar} = dto;
    const existUser = await this.userRepository.findByEmail(email);

    if (existUser) {
      throw new ConflictException(AuthUserError.Exists);
    }

    const user = {
      email,
      username,
      passwordHash: '',
      userAvatar: userAvatar,
      registrationDate: dayjs().toDate(),
      userBlogsCounter: 0,
      subcribesCounter: 0,
      feed: [],
      likedBlogs: [],
    }

    const userEntity = new UserEntity(user)
    await userEntity.setPassword(password);

    return await this.userRepository.create(userEntity);
  }

  public async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;

    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new ConflictException(AuthUserError.NotFound);
    }

    const userEntity = new UserEntity(existUser);
    if (!await userEntity.comparePassword(password)) {
      throw new ConflictException(AuthUserError.PasswordWrong);
    }

    return userEntity.toObject();
  }

  public async getUser(id: string) {
    return this.userRepository.findById(id);
  }

  //TODO: нужен рефактор после введения JWT токена
  public async changePassword(email: string, passwordOld: string, newPassword: string) {
    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new ConflictException(AuthUserError.NotFound);
    }

    const userEntity = new UserEntity(existUser);
    if (await userEntity.comparePassword(passwordOld)) {
      throw new ConflictException(AuthUserError.PasswordWrong);
    }

    this.userRepository.updatePassword(userEntity._id, newPassword);
  }
}
