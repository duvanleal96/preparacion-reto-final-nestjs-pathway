import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserGetDto } from '../dto/user.get.dto';
import { UserPostDto } from '../dto/user.post.dto';
import { UserPutDto } from '../dto/user.patch.dto';

@Injectable()
export class UsersService {
  users: UserGetDto[] = [
    {
      uuid: '1',
      name: 'Duvan',
      lastName: 'Leal',
      email: 'duvanleal@sofka.com',
    },
    {
      uuid: '2',
      name: 'enrique',
      lastName: 'Marin',
      email: 'enrique@sofka.com',
    },
    {
      uuid: '3',
      name: 'oscar',
      lastName: 'corredor',
      email: 'corredor@sofka.com',
    },
  ];
  getAll(): UserGetDto[] {
    return this.users;
  }
  createUsers(user: UserPostDto): UserPostDto {
    this.users.push(user);
    return user;
  }
  getById(uuid: string): UserGetDto | undefined {
    return this.users.find((user: UserGetDto) => (user.uuid = uuid));
  }
  putUser(uuid: string, users: UserPutDto) {
    const user = this.users.find((user: UserPutDto) => (user.uuid = uuid));
    if (user != undefined) {
      user.name = users.name;
      user.lastName = users.lastName;
      user.email = users.email;
    }
    return user;
  }
  updatePatchUser(uuid: string, userUpdate: UserPutDto): UserPutDto {
    const user = this.users.find((user: UserPutDto) => user.uuid == uuid);
    if (user == undefined) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    const userPatch: UserPutDto = {
      ...user,
      ...userUpdate,
    };
    this.users = this.users.map((user: UserPutDto) => {
      return user.uuid == uuid ? userPatch : user;
    });
    return userPatch;
  }
  deleUser(uuid: string): boolean {
    const deleteUser = this.users.find(
      (user: UserPostDto) => user.uuid == uuid,
    );
    if (deleteUser) return true;
    return false;
  }
}
