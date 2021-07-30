/* eslint-disable prettier/prettier */
export class CityEntity {
    private constructor(
        readonly id: string,
        readonly city: string,
        readonly statePostalCode: string,
        readonly stateName: string,
    ){}

    static fromDocument(document): Array<CityEntity> {
        return document.map( city => {
            return new CityEntity(
                city.id,
                city.city,
                city.statePostalCode,
                city.stateName,
            );
        })
    }

}
