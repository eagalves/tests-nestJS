/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { CityService } from '../service/CityService';
// GET /cities?name=Belo
@Controller('cities')
export class CityController {
  constructor(private readonly appService: CityService) {}
  @Get()
  getCities(){
    console.log(`estive ak 1`)
    return this.appService.getCitiesByName();
  }
}
