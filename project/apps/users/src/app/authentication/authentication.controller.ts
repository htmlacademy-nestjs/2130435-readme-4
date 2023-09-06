import { Body, Controller, Get, Param, Post, Put, Headers, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRdo } from './rdo/user.rdo';
import { fillObject } from '@project/util/util-core';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {MongoidValidationPipe} from "@project/shared/shared-pipes";
import {NotifyService} from "../notify/notify.service";

@ApiTags('authentication')
@Controller('users')
export class AuthenticationController {
  constructor(
    private readonly authService: AuthenticationService,
    private readonly notifyService: NotifyService,
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.'
  })
  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    const { email, username } = newUser;
    await this.notifyService.registerSubscriber({ email, username })
    return fillObject(UserRdo, newUser);
  }

  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User has been successfully logged.'
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Password or Login is wrong.',
  })
  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const user = await this.authService.verifyUser(dto);
    const loggedUser = await this.authService.createUserToken(user);
    return fillObject(LoggedUserRdo, Object.assign(user, loggedUser));
  }

  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User found'
  })
  @Get(':id')
  public async show(@Param('id', MongoidValidationPipe) id: string) {
    const existUser = await this.authService.getUser(id);
    return fillObject(UserRdo, existUser);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user password changed successfully.'
  })
  @Put('password')
  @HttpCode(204)
  public async updatePassword(
    // TODO: позже заменить на расшифровку JWT;
    @Headers() headers: {email: string},
    @Body() body: {password: string, newPassword: string}
    ) {
    await this.authService.changePassword(
      headers.email,
      body.password,
      body.newPassword
    );

    return 'Password has been successfully updated'
  }
}
