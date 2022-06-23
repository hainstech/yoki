import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { CarerModule } from 'src/carer/carer.module';
import { PatientModule } from 'src/patient/patient.module';

@Module({
  imports: [UserModule, CarerModule, PatientModule],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
