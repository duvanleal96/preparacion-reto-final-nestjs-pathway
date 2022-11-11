import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getMessage(): string {
    return 'Holla desde el servicio task';
  }
}
