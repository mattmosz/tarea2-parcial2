import { Module } from '@nestjs/common';
import { EstudiantesController } from './estudiantes.controller';
import { EstudiantesService } from './estudiantes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ESTUDIANTE } from 'src/models/models';
import { EstudianteSchema } from './schema/estudiante.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: ESTUDIANTE.name,
      useFactory: () => {
        return EstudianteSchema;
      },
    },
    ]),
  ],
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
  exports: [EstudiantesService],
})
export class EstudiantesModule {}
