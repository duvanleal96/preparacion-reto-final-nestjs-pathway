import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {
  getMessage(): string {
    return 'hola desde el servicio contact';
  }
}
