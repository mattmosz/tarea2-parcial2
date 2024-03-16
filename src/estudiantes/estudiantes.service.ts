import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEstudiantes } from './estudiantes.interface';
import { ESTUDIANTE } from 'src/models/models';
import { EstudiantesDTO } from './dto/estudiantes.dto';

@Injectable()
export class EstudiantesService {
    constructor(@InjectModel(ESTUDIANTE.name) private readonly modelo:Model<IEstudiantes>){}

    async insertarEstudiante(estudiante:EstudiantesDTO): Promise<IEstudiantes>{
        const nuevoEstudiante = new this.modelo({...estudiante});
        return await nuevoEstudiante.save();
    }

    async todos(): Promise<IEstudiantes[]>{
        return await this.modelo.find();
    }

    async uno(id:string): Promise<IEstudiantes>{
        return await this.modelo.findById(id);
    }

    async actualizar(id:string, estudiante:EstudiantesDTO): Promise<IEstudiantes>{
        return await this.modelo.findByIdAndUpdate(id, estudiante, {new:true});
    }

    async eliminar(id:string){
        await this.modelo.findByIdAndDelete(id);
        return {status:HttpStatus.OK, mensaje:"Estudiante eliminado"};
    }

}
