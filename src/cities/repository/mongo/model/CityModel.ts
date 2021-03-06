/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CityDocument = City & Document;

@Schema()
export class City {
  @Prop()
  city: string;

  @Prop()
  statePostalCode: string;

  @Prop()
  stateName: string;
}

export const CitySchema = SchemaFactory.createForClass(City);
