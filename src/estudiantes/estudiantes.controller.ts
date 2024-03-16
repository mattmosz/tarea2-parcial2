import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesDTO } from './dto/estudiantes.dto';

@Controller('api/v2/estudiantes')
export class EstudiantesController {
    constructor(private estudianteService:EstudiantesService){}

    @Post()
    insertar(@Body() estduanteDTO:EstudiantesDTO){
        return this.estudianteService.insertarEstudiante(estduanteDTO);
    }

    @Get()
    todos(){
        return this.estudianteService.todos();
    }

    @Get(':id')
    uno(@Param('id') id:string){
        return this.estudianteService.uno(id);
    }

    @Put(':id')
    actualizar(@Param("id") id:string, @Body() estudianteDTO:EstudiantesDTO){
        return this.estudianteService.actualizar(id, estudianteDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.estudianteService.eliminar(id);
    }
}
