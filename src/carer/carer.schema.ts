import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { FilledQuestionnaire } from 'src/types';
import { User } from '../user/user.schema';

export type CarerDocument = Carer & Document;

@Schema()
export class Carer {
  @Prop()
  name: string;

  @Prop()
  gender: String;

  @Prop()
  language: String;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  filledQuestionnaires: Array<FilledQuestionnaire>;
}

export const CarerSchema = SchemaFactory.createForClass(Carer);
