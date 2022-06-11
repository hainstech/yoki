import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { UiSchema } from 'src/types';
import { JSONSchema7 } from 'json-schema';

export type QuestionnaireDocument = Questionnaire & Document;

@Schema()
export class Questionnaire {
  @Prop({ required: true, type: mongoose.SchemaTypes.Mixed })
  schema: JSONSchema7;

  @Prop({ required: true, type: mongoose.SchemaTypes.Mixed })
  uischema: UiSchema;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  language: string;
}

export const QuestionnaireSchema = SchemaFactory.createForClass(Questionnaire);
