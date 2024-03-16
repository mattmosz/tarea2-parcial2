import { Module } from '@nestjs/common';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { CURSO } from 'src/models/models';
import { cursoSchema } from './schema/cursos.schema';
import { EstudiantesModule } from 'src/estudiantes/estudiantes.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: CURSO.name,
      useFactory: () => cursoSchema.plugin(require('mongoose-autopopulate')),
    },
  ]),
  EstudiantesModule,
  ],
  controllers: [CursosController],
  providers: [CursosService]
})
export class CursosModule {}
