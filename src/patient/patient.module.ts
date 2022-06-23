import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientSchema } from './patient.schema';
import { UserModule } from 'src/user/user.module';
import { UserSchema } from 'src/user/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Patient',
        schema: PatientSchema,
      },
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),
    UserModule,
  ],
  controllers: [PatientController],
  providers: [PatientService],
  exports: [PatientService],
})
export class PatientModule {}
