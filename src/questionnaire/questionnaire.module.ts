import { Module } from '@nestjs/common';
import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireController } from './questionnaire.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionnaireSchema } from './questionnaire.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Questionnaire',
        schema: QuestionnaireSchema,
      },
    ]),
  ],
  controllers: [QuestionnaireController],
  providers: [QuestionnaireService],
})
export class QuestionnaireModule {}
