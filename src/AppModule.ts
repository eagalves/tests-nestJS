import { MongoCityRepository } from './cities/repository/mongo/MongoCityRepository';
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CityController } from './cities/controller/CityController';
import { CityService } from './cities/service/CityService';
import { City, CitySchema } from './cities/repository/mongo/model/CityModel'

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
		MongooseModule.forRoot(process.env.MONGO_URL, { useFindAndModify: false }),
		MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
  ],
  controllers: [CityController],
  providers: [CityService, MongoCityRepository],
})
export class AppModule {}
