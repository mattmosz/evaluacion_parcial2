import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { AutoresService } from 'src/autores/autores.service';
import { EditorialesService } from 'src/editoriales/editoriales.service';
import { LibrosDTO } from './dto/libros.dto';

@Controller('api/v2/libros')
export class LibrosController {
    constructor(private readonly librosService:LibrosService, 
        private readonly autoresService:AutoresService, 
        private readonly editorialesService: EditorialesService
    ){}

    @Post()
    insertar(@Body() librosDTO:LibrosDTO){
        return this.librosService.insertar(librosDTO);
    }

    @Get()
    todos(){
        return this.librosService.todos();
    }

    @Get(':id')
    uno(@Param('id') id:string){
        return this.librosService.uno(id);
    }

    @Put(':id')
    actualizar(@Param('id') id:string, @Body() librosDTO:LibrosDTO){
        return this.librosService.actualizar(id, librosDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.librosService.eliminar(id);
    }

    @Post(':idLibro/autores/:idAutor')
    async agregarAutor(
        @Param('idLibro') idLibro:string,
        @Param('idAutor') idAutor:string
    ){
        const autor = await this.autoresService.uno(idAutor);
        if(!autor) throw new Error('Autor no encontrado');
        return this.librosService.insertarAutor(idLibro, idAutor);
    }

    @Post(':idLibro/editoriales/:idEditorial')
    async agregarEditorial(
        @Param('idLibro') idLibro:string,
        @Param('idEditorial') idEditorial:string
    ){
        const editorial = await this.editorialesService.uno(idEditorial);
        if(!editorial) throw new Error('Editorial no encontrada');
        return this.librosService.insertarEditorial(idLibro, idEditorial);
    }

    
}
