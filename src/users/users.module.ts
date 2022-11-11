import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';
import { HttpMiddleware } from './http.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HttpMiddleware)
      .forRoutes(
        { path: 'users/:uuid', method: RequestMethod.PUT },
        { path: 'users', method: RequestMethod.POST },
      );
  }
}
