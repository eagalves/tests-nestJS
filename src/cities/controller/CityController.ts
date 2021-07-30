/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from '../service/CityService';
import { City } from '../repository/model/CityModel';
// GET /cities?name=Belo
@Controller('cities')
export class CityController {
  constructor(private readonly appService: CityService) {}
  @Get(':name')
  getCities(@Param() params): Promise<City[]>{
    return this.appService.getCitiesByName(params.name);
  }
}
