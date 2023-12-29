import {  IsDateString, IsNumber, IsString } from "class-validator";

export class CreateCarDto {
  @IsString()  
  name: string;
  @IsNumber()
  brandId: number;
  @IsNumber()
  price: number;
  
  release: Date;
}
