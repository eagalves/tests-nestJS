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
  
  async findCitiesByName(city):  Promise<City[]>{
    return this.cityModel.find({name: {$regex: '^' + city, $options: 'i'}}).exec();
    //  return this.cityModel.create({ name: 'Jean-Luc Picard', statePostalCod: 'qualquer', stateName:'teste' });
  }
}
