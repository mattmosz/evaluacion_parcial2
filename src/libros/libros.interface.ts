import { IAutores } from "src/autores/autores.interface";
import { IEditoriales } from "src/editoriales/editoriales.interface";

export interface ILibros extends Document {
    titulo: string;
    autores: IAutores[];
    editorial: IEditoriales;
}