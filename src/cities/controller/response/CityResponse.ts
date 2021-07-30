/* eslint-disable prettier/prettier */
// recebe um array de entidade e retorna um array de response
export class CityResponse {
    private constructor(
        private readonly id: string,
        private readonly city: string,
        private readonly statePostalCode: string,
        private readonly stateName: string,
    ){}

    public static fromEntity(cities): Array<CityResponse>{
        return cities.map( city => {
            return new CityResponse(
                city.id,
                city.city,
                city.statePostalCode,
                city.stateName,
            );
        })
    }
}
