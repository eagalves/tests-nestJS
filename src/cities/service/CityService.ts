/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'; 
// import { CreateQuotationRequest } from '../request/create/QuotationRequest'; 
import { CityRepository } from '../repository/CityRepository';


@Injectable()
export class CityService {
  constructor(
    private cityRepository: CityRepository
  ) {}

  async getCitiesByName() {
    console.log(`estive ak 2`)
    return this.cityRepository.findCitiesByName();
  }

  


}
