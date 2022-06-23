import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { FilledQuestionnaire } from 'src/types';

export type PatientDocument = Patient & Document;

@Schema()
export class Patient {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  dob: Date;

  @Prop({ required: true })
  gender: String;

  @Prop({ required: true })
  language: String;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true })
  userId: string;

  @Prop()
  filledQuestionnaires: Array<FilledQuestionnaire>;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
