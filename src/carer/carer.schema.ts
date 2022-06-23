import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { FilledQuestionnaire } from 'src/types';

export type CarerDocument = Carer & Document;

@Schema()
export class Carer {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  language: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true })
  userId: string;

  @Prop()
  filledQuestionnaires: Array<FilledQuestionnaire>;
}

export const CarerSchema = SchemaFactory.createForClass(Carer);
