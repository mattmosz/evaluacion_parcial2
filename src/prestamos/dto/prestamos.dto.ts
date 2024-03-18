import { IsDate, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class PrestamosDTO {
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    readonly fecha: Date;
}