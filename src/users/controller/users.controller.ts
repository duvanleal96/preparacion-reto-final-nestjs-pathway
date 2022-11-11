import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { GuardAuth } from '../guards.auth';
import { ResponseInterceptor } from '../response.interceptor';
import { UserGetDto } from '../dto/user.get.dto';
import { UserPostDto } from '../dto/user.post.dto';
import { UserPutDto } from '../dto/user.patch.dto';

@Controller('users')
@UseGuards(GuardAuth)
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('')
  findAll(): UserGetDto[] {
    return this.userService.getAll();
  }

  @Post()
  @UseInterceptors(ResponseInterceptor)
  postUsers(
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    user: UserPostDto,
  ): UserPostDto {
    return this.userService.createUsers(user);
  }

  @Get(':uuid')
  @UseInterceptors(ResponseInterceptor)
  getUserByUuid(@Param('uuid') uuid: string) {
    return this.userService.getById(uuid);
  }

  @Put('/:uuid')
  @UseInterceptors(ResponseInterceptor)
  putUsers(@Param('uuid') uuid: string, @Body() users: UserPutDto) {
    console.log(uuid);
    return this.userService.putUser(uuid, users);
  }

  @Patch(':uuid')
  @UseInterceptors(ResponseInterceptor)
  updatePatchUser(
    @Param('uuid') uuid: string,
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    userUpdate: UserPutDto,
  ): UserPutDto {
    return this.userService.updatePatchUser(uuid, userUpdate);
  }

  @Delete(':uuid')
  deleteUser(@Param('uuid') uuid: string): boolean {
    return this.userService.deleUser(uuid);
  }
}
