import { Module } from '@nestjs/common';
import { EditorialesController } from './editoriales.controller';
import { EditorialesService } from './editoriales.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EDITORIALES } from 'src/models/models';
import { EditorialesSchema } from './schema/editoriales.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: EDITORIALES.name,
      useFactory:()=>EditorialesSchema,
    }])
  ],
  controllers: [EditorialesController],
  providers: [EditorialesService],
  exports: [EditorialesService],
})
export class EditorialesModule {}
