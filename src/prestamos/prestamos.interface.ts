import { ILibros } from "src/libros/libros.interface";

export interface IPrestamos extends Document {
    fecha: Date;
    libro: ILibros[];
}