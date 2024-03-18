import { IsNotEmpty, IsString } from "class-validator";

export class LibrosDTO {
    @IsNotEmpty({message: 'El campo titulo no puede estar vacío'})
    @IsString({message: 'El campo titulo debe ser de tipo string'})
    readonly titulo: string;
}