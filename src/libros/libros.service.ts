import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LIBROS } from 'src/models/models';
import { ILibros } from './libros.interface';
import { LibrosDTO } from './dto/libros.dto';

@Injectable()
export class LibrosService {
    constructor(@InjectModel(LIBROS.name) private readonly model:Model<ILibros>){}

    insertar(librosDTO: LibrosDTO):Promise<ILibros>{
        const nuevoLibro = new this.model(librosDTO);
        return nuevoLibro.save();
    }

    todos():Promise<ILibros[]>{
        return this.model.find();
    }

    uno(id:string):Promise<ILibros>{
        return this.model.findById(id);
    }

    actualizar(id:string, librosDTO:LibrosDTO):Promise<ILibros>{
        return this.model.findByIdAndUpdate(id, librosDTO, {new:true});
    }

    async eliminar(id:string){
        await this.model.findByIdAndDelete(id);
        return {status: HttpStatus.OK, message: 'Libro eliminado'};
    }

    async insertarAutor(idLibro:string, idAutor:string):Promise<ILibros>{
        return await this.model.findByIdAndUpdate(idLibro, {$addToSet: {autores: idAutor}}, {new:true},
            ).populate('autores');
    }

    async insertarEditorial(
        idLibro:string, idEditorial:string
        ):Promise<ILibros>{
        return await this.model
        .findByIdAndUpdate(
            idLibro, {
                $addToSet: {editorial: idEditorial}
            }, {new:true},
            ).populate('editorial');
    }
}
