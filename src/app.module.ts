import { Module } from '@nestjs/common';
import { AppController } from './cities/controller/app.controller';
import { AppService } from './cities/service/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
