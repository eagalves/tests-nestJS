import { Controller, Get } from '@nestjs/common';
import { CityService } from '../service/CityService';
// GET /cities?name=Belo
@Controller('cities')
export class CityController {
  constructor(private readonly appService: CityService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
