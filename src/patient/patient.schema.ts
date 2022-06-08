import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { FilledQuestionnaire } from 'src/types';
import { User } from '../user/user.schema';

export type PatientDocument = Patient & Document;

@Schema()
export class Patient {
  @Prop()
  name: string;

  @Prop()
  dob: Date;

  @Prop()
  gender: String;

  @Prop()
  language: String;

  @Prop()
  research: boolean;

  @Prop()
  terms: boolean;

  @Prop()
  dataConsent: boolean;

  @Prop()
  participantConsent: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  filledQuestionnaires: Array<FilledQuestionnaire>;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
