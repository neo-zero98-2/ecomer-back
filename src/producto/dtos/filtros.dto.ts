import { IsNumber } from "class-validator";

export class FiltersDTO {
    @IsNumber()
    idCategoria:number;

    @IsNumber()
    existencia:number;

    @IsNumber()
    precioMinimo: number;

    @IsNumber()
    precioMaximo:number;
}