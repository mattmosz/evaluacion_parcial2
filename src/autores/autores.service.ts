import { Delete, HttpStatus, Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AUTORES } from 'src/models/models';
import { IAutores } from './autores.interface';
import { AutoresDTO } from './dto/autores.dto';

@Injectable()
export class AutoresService {
    constructor(@InjectModel(AUTORES.name) private readonly modelo:Model<IAutores>){}

    async insertar(autoresDTO:AutoresDTO): Promise<IAutores>{
        const newAutor = new this.modelo({...autoresDTO});
        return await newAutor.save();
    }

    async todos(): Promise<IAutores[]>{
        return await this.modelo.find();
    }

    async uno(id:string): Promise<IAutores>{
        return await this.modelo.findById(id);
    }

    async actualizar(id:string, autoresDTO:AutoresDTO): Promise<IAutores>{
        return await this.modelo.findByIdAndUpdate(id, autoresDTO, {new:true});
    }

    async eliminar(id:string){
        await this.modelo.findByIdAndDelete(id);
        return {status:HttpStatus.OK, mensaje:'Autor eliminado'};
    }
    
}
