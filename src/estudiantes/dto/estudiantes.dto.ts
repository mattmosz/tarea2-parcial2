import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EstudiantesDTO {
    @IsNotEmpty({ message: 'El nombre es requerido'})
    @IsString()
  readonly nombre: string;
    @IsNotEmpty({ message: 'La edad es requerida'})
    @IsNumber()
  readonly edad: number;
    @IsNotEmpty({ message: 'La carrera es requerida'})
    @IsString()
  readonly carrera: string;
    @IsNotEmpty({ message: 'El promedio es requerido'})
    @IsNumber()
  readonly promedio: number;
}