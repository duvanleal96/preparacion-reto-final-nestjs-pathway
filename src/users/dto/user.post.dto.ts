import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { randomUUID } from 'crypto';
import { UserInterface } from '../interfaces/user.interface';

export class UserPostDto implements UserInterface {
  @IsOptional()
  @IsUUID()
  uuid: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  constructor(user?: UserPostDto) {
    this.uuid = user?.uuid ?? randomUUID();
    this.name = user?.name ?? '';
    if (user?.lastName) this.lastName = user.lastName;
    this.email = user?.email ?? '';
  }
}
