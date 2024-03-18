import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { LibrosService } from 'src/libros/libros.service';
import { PrestamosDTO } from './dto/prestamos.dto';

@Controller('api/v2/prestamos')
export class PrestamosController {
    constructor(private readonly prestamosService:PrestamosService, private readonly librosService:LibrosService){}

    @Post()
    insertar(@Body() prestamosDTO:PrestamosDTO){
        return this.prestamosService.insertar(prestamosDTO);
    }

    @Get()
    todos(){
        return this.prestamosService.todos();
    }

    @Get(':id')
    uno(@Param('id') id:string){
        return this.prestamosService.uno(id);
    }

    @Put(':id')
    actualizar(@Param('id') id:string, @Body() prestamosDTO:PrestamosDTO){
        return this.prestamosService.actualizar(id, prestamosDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.prestamosService.eliminar(id);
    }

    @Post(':idPrestamo/libro/:idLibro')
    async agregarLibro(@Param('idPrestamo') idPrestamo:string, @Param('idLibro') idLibro:string){
        const libro = await this.librosService.uno(idLibro);
        if(!libro) throw new Error('Libro no encontrado');
        return this.prestamosService.insertarLibro(idPrestamo, idLibro);
    }
}
