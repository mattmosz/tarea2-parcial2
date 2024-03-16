import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CURSO } from 'src/models/models';
import { ICurso } from './cursos.interface';
import { CursoDTO } from './dto/cursos.dto';

@Injectable()
export class CursosService {
    constructor(@InjectModel(CURSO.name) private readonly cursoModel: Model<ICurso>){}

    async insertar(CursoDTO:CursoDTO): Promise<ICurso>{
        const newCurso = new this.cursoModel(CursoDTO);
        return await newCurso.save();
    }

    async todos(): Promise<ICurso[]>{
        return await this.cursoModel.find();
    }

    async uno(id: string): Promise<ICurso>{
        return await this.cursoModel.findById(id);
    }

    async actualizar(id: string, CursoDTO: CursoDTO): Promise<ICurso>{
        return await this.cursoModel.findByIdAndUpdate(id, CursoDTO, {new:true});
    }

    async eliminar(id: string){
        await this.cursoModel.findByIdAndDelete(id);
        return {status: HttpStatus.OK, message: 'Curso eliminado'};
    }

    async insertarEstudiante(cursoId: string, estudianteid: string): Promise<ICurso> {
        return await this.cursoModel.findByIdAndUpdate(cursoId, 
            {
                $addToSet: {estudiantes: estudianteid}
            },
            {new:true},
            ).populate('estudiante');
    }
}
