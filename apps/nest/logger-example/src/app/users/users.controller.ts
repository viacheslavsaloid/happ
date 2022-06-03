import {Body, Controller, Get, Post} from '@nestjs/common';
import { UsersService } from './users.service';
import {Logger} from "@happ/nest-logger";

@Controller('users')
@Logger()
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Get()
  getMany() {
    return this._usersService.getMany();
  }

  @Post()
  createOne(@Body() body: unknown) {
    return this._usersService.createOne(body);
  }
}
