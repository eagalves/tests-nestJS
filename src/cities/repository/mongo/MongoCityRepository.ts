/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CityDocument, City as CityModel } from './model/CityModel';
import { CityEntity } from '../../entity/CityEntity'
import { CityRepository } from '../CityRepository';
// tem que ser uma interface

@Injectable()
export class MongoCityRepository implements CityRepository{
    constructor(
        @InjectModel(CityModel.name)  // porque City.name???
        private cityModel: Model<CityDocument>
    ) { }

    async findCitiesByName(nameCity): Promise<CityEntity[]> {
        const cityDocument = await this.cityModel.find({ city: { $regex: '^' + nameCity, $options: 'i' } }).exec();
        return CityEntity.fromDocument(cityDocument)
        //  return this.cityModel.create({ name: 'Jean-Luc Picard', statePostalCod: 'qualquer', stateName:'teste' });
    }
}

