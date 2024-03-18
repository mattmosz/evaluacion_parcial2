import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PRESTAMOS } from 'src/models/models';
import { IPrestamos } from './prestamos.interface';
import { PrestamosDTO } from './dto/prestamos.dto';

@Injectable()
export class PrestamosService {
    constructor(@InjectModel(PRESTAMOS.name) private readonly model:Model<IPrestamos>){}

    insertar(prestamosdto:PrestamosDTO) : Promise<IPrestamos>{
        const nuevoPrestamo = new this.model(prestamosdto);
        return nuevoPrestamo.save();
    }

    todos() : Promise<IPrestamos[]>{
        return this.model.find();
    }

    uno(id:string) : Promise<IPrestamos>{
        return this.model.findById(id);
    }

    actualizar(id:string, prestamosdto:PrestamosDTO) : Promise<IPrestamos>{
        return this.model.findByIdAndUpdate(id, prestamosdto, {new:true});
    }

    async eliminar(id:string){
        await this.model.findByIdAndDelete(id);
        return {status: HttpStatus.OK, message: 'Prestamo eliminado'};
    }

    async insertarLibro(idPrestamo:string, idLibro:string) : Promise<IPrestamos>{
        return await this.model.findByIdAndUpdate(idPrestamo, {$addToSet: {libro: idLibro}}, {new:true},
            ).populate('libro');
    }
}
