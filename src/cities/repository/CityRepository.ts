/* eslint-disable prettier/prettier */
export interface CityRepository {
    findCitiesByName(nameCity);
  }
  
  export enum REPOSITORY_IMPLEMENTATION {
    MONGO = 'MONGO',
  }
  