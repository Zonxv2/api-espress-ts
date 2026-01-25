import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import type { RequestUser, UserLogin } from './types';
import { UsersGuard } from './users.guard';
// import type { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  async register(
    @Body() body: CreateUserDto,
    // @Res() res: Response
  ) {
    return await this.usersService.register(body);
    // const response = await this.usersService.register(body);
    // res.status(HttpStatus.CREATED).json(response)
  }

  @Post('/login')
  async login(@Body() body: UserLogin) {
    return await this.usersService.login(body);
  }

  @Get('/profile')
  @UseGuards(UsersGuard)
  profile(@Request() req: RequestUser) {
    return this.usersService.profile(req);
  }
}
