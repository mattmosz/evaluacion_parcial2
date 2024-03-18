import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EDITORIALES } from 'src/models/models';
import { IEditoriales } from './editoriales.interface';
import { EditorialesDTO } from './dto/editoriales.dto';

@Injectable()
export class EditorialesService {
    constructor(@InjectModel (EDITORIALES.name) private readonly model:Model<IEditoriales>){}

    async insertar (editorialesDTO: EditorialesDTO):Promise<IEditoriales>{
        const nuevoEditorial = new this.model(editorialesDTO);
        return await nuevoEditorial.save();
    }

    async todos():Promise<IEditoriales[]>{
        return await this.model.find();
    }

    async uno (id:string):Promise<IEditoriales>{
        return await this.model.findById(id);
    }

    async actualizar (id:string, editorialesDTO:EditorialesDTO):Promise<IEditoriales>{
        return await this.model.findByIdAndUpdate(id, editorialesDTO, {new:true});
    }

    async eliminar (id:string){
        await this.model.findByIdAndDelete(id);
        return {status: HttpStatus.OK, message: 'Editorial eliminado'};
    }
}
