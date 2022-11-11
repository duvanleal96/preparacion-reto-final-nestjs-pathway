import { Injectable } from '@nestjs/common';
import { timeStamp } from 'console';
import { userDto } from './user.dto';

@Injectable()
export class UsersService {
  users: userDto[] = [
    {
      uuid: '1',
      name: 'Duvan',
      lastname: 'Leal',
      email: 'duvanleal@sofka.com',
    },
    {
      uuid: '2',
      name: 'enrique',
      lastname: 'Marin',
      email: 'enrique@sofka.com',
    },
    {
      uuid: '3',
      name: 'oscar',
      lastname: 'corredor',
      email: 'corredor@sofka.com',
    },
  ];
  getAll(): userDto[] {
    return this.users;
  }
  createUsers(user: userDto): userDto {
    this.users.push(user);
    return user;
  }
  getById(uuid: string): userDto | undefined {
    return this.users.find((user: userDto) => (user.uuid = uuid));
  }
  putUser(uuid: string, users: userDto): userDto | undefined {
    const user = this.users.find((user: userDto) => (user.uuid = uuid));
    if (user != undefined) {
      user.name = users.name;
      user.lastname = users.lastname;
      user.email = users.email;
    }
    return user;
  }
  deleUser(uuid: string): boolean {
    const deleteUser = this.users.find((user: userDto) => user.uuid == uuid);
    if (deleteUser) return true;
    return false;
  }
}
