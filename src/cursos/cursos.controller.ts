import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursoDTO } from './dto/cursos.dto';
import { EstudiantesService } from 'src/estudiantes/estudiantes.service';

@Controller('api/v2/cursos')
export class CursosController {
    constructor(private readonly cursosService: CursosService, private readonly estudianteService: EstudiantesService){}

    @Post()
    insertar(@Body() CursoDTO: CursoDTO){
        return this.cursosService.insertar(CursoDTO);
    }

    @Get()
    todos(){
        return this.cursosService.todos();
    }

    @Get(':id')
    uno(@Param('id') id: string){
        return this.cursosService.uno(id);
    }

    @Put(':id')
    actualizar(@Param('id') id: string, @Body() CursoDTO: CursoDTO){
        return this.cursosService.actualizar(id, CursoDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id: string){
        return this.cursosService.eliminar(id);
    }
    @Post(':cursoId/estudiantes/:estudianteId')
    async insertarEstudiante(@Param('cursoId') cursoId: string, @Param('estudianteId') estudianteId: string){
        const estudiante = await this.estudianteService.uno(estudianteId);
        if(!estudiante) throw new Error('Estudiante no existe');
        return this.cursosService.insertarEstudiante(cursoId, estudianteId);
    }
}
