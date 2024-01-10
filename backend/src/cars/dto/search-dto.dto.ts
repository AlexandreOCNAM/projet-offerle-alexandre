import { IsString } from "class-validator";

export class SearchCarDto {
  @IsString()
  name: string;
}