import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CursoDTO{
    @IsNotEmpty({message:'El nombre del curso es requerido'})
    @IsString({message:'El nombre del curso debe ser un texto'})
    readonly nombre:string;
    @IsNotEmpty({message:'Los creditos del curso son requeridos'})
    @IsNumber()
    readonly creditos:number;
    @IsNotEmpty({message:'El profesor del curso es requerido'})
    @IsString({message:'El profesor del curso debe ser un texto'})
    readonly profesor:string;
    @IsNotEmpty({message:'El horario del curso es requerido'})
    @IsString({message:'El horario del curso debe ser un texto'})
    readonly horario:string;
}