import { IEstudiantes } from "src/estudiantes/estudiantes.interface";

export interface ICurso extends Document{
    nombre:string;
    creditos:number;
    profesor:string;
    horario:string;
    estudiantes: IEstudiantes[];
}