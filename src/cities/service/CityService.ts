import { CityEntity } from './../entity/CityEntity';
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'; 
// import { CreateQuotationRequest } from '../request/create/QuotationRequest'; 
import { MongoCityRepository } from '../repository/mongo/MongoCityRepository';


@Injectable()
export class CityService {
  constructor(
    private cityRepository: MongoCityRepository
  ) {}

  async getCitiesByName(nameCity) : Promise<Array<CityEntity>>{
    return this.cityRepository.findCitiesByName(nameCity);
  }
}
