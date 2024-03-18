import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AUTORES } from 'src/models/models';
import { AutoresSchema } from './schema/autores.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: AUTORES.name,
      useFactory: () => {
        return AutoresSchema;
      },
    },
  ]),
  ],
  controllers: [AutoresController],
  providers: [AutoresService],
  exports: [AutoresService],
})
export class AutoresModule {}
