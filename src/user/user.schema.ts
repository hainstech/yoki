import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Patient } from '../patient/patient.schema';
import { UserType } from 'src/types';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  type: UserType;

  @Prop()
  password: string;

  @Prop()
  roleId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' })
  patientId: Patient;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' })
  professionalId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
