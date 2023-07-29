import { Body, Controller, Get, Param, Post, Put, Headers, HttpCode } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from '../user/DTO/create-user.dto';
import { UserRdo } from '../user/RDO/user.rdo';
import { fillObject } from '@project/util/util-core';
import { LoggedUserRdo } from '../user/RDO/logged-user.rdo';
import { LoginUserDto } from '../user/DTO/login-user.dto';


@Controller('users')
export class AuthenticationController {
  constructor(
    private readonly authService: AuthenticationService
  ) {}

  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return fillObject(UserRdo, newUser);
  }

  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const user = await this.authService.verifyUser(dto);
    return fillObject(LoggedUserRdo, user);
  }

  @Get(':id')
  public async show(@Param('id') id: string) {
    const existUser = await this.authService.getUser(id);
    return fillObject(UserRdo, existUser);
  }

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
