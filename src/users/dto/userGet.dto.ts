import { UserInterface } from '../../../dist/users/user.interface';
export class UserGetDto implements UserInterface {
  uuid: string;
  name: string;
  lastname: string;
  email: string;
}
