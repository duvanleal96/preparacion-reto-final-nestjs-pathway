import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { AuthGuard } from '../auth.guard';
import { ResponseInterceptor } from '../response.interceptor';
import { UserGetDto } from '../dto/user.get.dto';
import { UserPostDto } from '../dto/user.post.dto';
import { UserPutDto } from '../dto/user.patch.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('')
  findAll(): UserGetDto[] {
    return this.userService.getAll();
  }

  @Post()
  @UseInterceptors(ResponseInterceptor)
  @UseGuards(AuthGuard)
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
  getUserByUuid(@Param('uuid') uuid: string): UserGetDto | undefined {
    return this.userService.getById(uuid);
  }

  @Put(':uuid')
  @UseInterceptors(ResponseInterceptor)
  putUsers(@Param('uuid') uuid: string, @Body() users: UserPutDto) {
    console.log(uuid);
    return this.userService.putUser(uuid, users);
  }

  @Delete(':uuid')
  deleteUser(@Param('uuid') uuid: string): boolean {
    return this.userService.deleUser(uuid);
  }
}
