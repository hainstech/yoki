import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PatientModule } from './patient/patient.module';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.production'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    UserModule,
    PatientModule,
    QuestionnaireModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}