import { IsString } from 'class-validator';

export class CreateProductDTO {
    name:string;
    description:string;
    price:number;
}
