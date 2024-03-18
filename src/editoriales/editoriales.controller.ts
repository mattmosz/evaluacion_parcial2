import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EditorialesService } from './editoriales.service';
import { EditorialesDTO } from './dto/editoriales.dto';

@Controller('api/v2/editoriales')
export class EditorialesController {
    constructor(private readonly editorialesService: EditorialesService){}

    @Post()
    insertar(@Body() editorialesDTO:EditorialesDTO){
        return this.editorialesService.insertar(editorialesDTO);
    }

    @Get()
    todos(){
        return this.editorialesService.todos();
    }

    @Get(':id')
    uno(@Param('id') id:string){
        return this.editorialesService.uno(id);
    }

    @Put(':id')
    actualizar(@Param('id') id:string, @Body() editorialesDTO:EditorialesDTO){
        return this.editorialesService.actualizar(id, editorialesDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.editorialesService.eliminar(id);
    }
}
