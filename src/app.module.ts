import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CityController } from './cities/controller/CityController';
import { CityService } from './cities/service/CityService';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [CityController],
  providers: [CityService],
})
export class AppModule {}
