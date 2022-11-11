import { UserInterface } from './user.interface';
import { v4 as uuid } from 'uuid';
import { IsEmail, IsString, IsUUID } from 'class-validator';
export class userDto implements UserInterface {
  @IsUUID()
  uuid: string;

  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsEmail()
  email: string;

  constructor(data: UserInterface) {
    this.uuid = data.uuid ?? uuid();
    this.name = data.name;
    this.lastname = data.lastname;
    this.email = data.email;
  }
}
