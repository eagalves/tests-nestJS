/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CityDocument, City } from './model/CityModel';

@Injectable()
export class CityRepository {
  constructor(
    @InjectModel(City.name)  // porque City.name???
    private cityModel: Model<CityDocument>
  ) {}
  
  async findCitiesByName():  Promise<City[]>{
    console.log(`estive ak 3`)
    return this.cityModel.find({name: 'Ariquemes'}).exec();
    //  return this.cityModel.create({ name: 'Jean-Luc Picard', statePostalCod: 'qualquer', stateName:'teste' });
  }
}
