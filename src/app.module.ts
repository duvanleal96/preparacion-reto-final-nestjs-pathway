import { Module } from '@nestjs/common';
import { AppController } from './users/main/app.controller';
import { AppService } from './users/main/app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
