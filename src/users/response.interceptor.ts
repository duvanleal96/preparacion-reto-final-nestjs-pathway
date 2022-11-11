import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { UserGetDto } from './dto/user.get.dto';

export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap((data) => {
        if (data.lastName == undefined) {
          data.lastName = 'null';
        }
        if (data.length > 1) {
          data.forEach((user: UserGetDto) => {
            if (user.lastName == undefined) {
              user.lastName = 'null';
            }
          });
        }
      }),
    );
  }
}
