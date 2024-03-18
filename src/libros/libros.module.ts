import { Module } from '@nestjs/common';
import { LibrosController } from './libros.controller';
import { LibrosService } from './libros.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LIBROS } from 'src/models/models';
import { LibrosSchema } from './schema/libros.schema';
import { AutoresModule } from 'src/autores/autores.module';
import { EditorialesModule } from 'src/editoriales/editoriales.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: LIBROS.name,
      useFactory: ()=> LibrosSchema.plugin(require('mongoose-autopopulate')),
    },
  ]),
  AutoresModule,
  EditorialesModule,
  ],
  controllers: [LibrosController],
  providers: [LibrosService],
  exports: [LibrosService],
})
export class LibrosModule {}
