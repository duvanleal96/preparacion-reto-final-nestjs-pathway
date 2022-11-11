import { v4 as uuid } from 'uuid';

export interface UserInterface {
  uuid: string;
  name: string;
  lasName?: string;
  email: string;
}
