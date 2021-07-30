/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from '../service/CityService';
import { CityResponse } from './response/CityResponse'
// GET /cities?name=Belo
@Controller('cities')
export class CityController {
  constructor(private readonly appService: CityService) {}
  @Get(':name')
  async getCities(@Param() params): Promise<Array<CityResponse>>{
    const cities = await this.appService.getCitiesByName(params.name);
    return CityResponse.fromEntity(cities)
  
  }
}
