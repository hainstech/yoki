import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
import { FilledQuestionnaire } from 'src/types';

export type CarerDocument = Carer & Document;

@Schema()
export class Carer {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  language: String;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop()
  filledQuestionnaires: Array<FilledQuestionnaire>;
}

export const CarerSchema = SchemaFactory.createForClass(Carer);
