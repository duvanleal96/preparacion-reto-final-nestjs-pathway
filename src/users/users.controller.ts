import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { userDto } from './user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('all')
  findAll(): userDto[] {
    return this.userService.getAll();
  }
  @Post()
  GetData(@Body() user: userDto): userDto {
    return this.userService.createUsers(user);
  }
  @Get('user/:uuid')
  getUserByUuid(@Param('uuid') uuid: string): userDto | undefined {
    return this.userService.getById(uuid);
  }
  @Put('user/:uuid')
  putUsers(
    @Param('uuid') uuid: string,
    @Body() users: userDto,
  ): userDto | undefined {
    return this.userService.putUser(uuid, users);
  }
  @Delete('user/:uuid')
  deleteUser(@Param('uuid') uuid: string): boolean {
    return this.userService.deleUser(uuid);
  }
}
