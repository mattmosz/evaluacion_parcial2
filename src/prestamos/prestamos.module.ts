import { Module } from '@nestjs/common';
import { PrestamosController } from './prestamos.controller';
import { PrestamosService } from './prestamos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PRESTAMOS } from 'src/models/models';
import { PrestamosSchema } from './schema/prestamos.schema';
import { LibrosModule } from 'src/libros/libros.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: PRESTAMOS.name,
      useFactory: () => PrestamosSchema.plugin(require('mongoose-autopopulate')),
    },
    ]),
    LibrosModule,
  ],
  controllers: [PrestamosController],
  providers: [PrestamosService]
})
export class PrestamosModule {}
