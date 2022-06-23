import { Body, Controller, Post } from '@nestjs/common';
import { CarerService } from 'src/carer/carer.service';
import { CreateCarerDto } from 'src/carer/dto/create-carer.dto';
import { CreatePatientDto } from 'src/patient/dto/create-patient.dto';
import { PatientService } from 'src/patient/patient.service';
import { Payload, UserRole } from 'src/types';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private carerService: CarerService,
    private patientService: PatientService
  ) {}

  @Post('carer')
  async registerCarer(@Body() createCarerDto: CreateCarerDto) {
    const { user } = await this.carerService.create(createCarerDto);
    const payload = {
      id: user._id,
      role: user.role as UserRole,
      email: user.email,
    };
    delete user.password;
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Post('patient')
  async registerPatient(@Body() createPatientDto: CreatePatientDto) {
    const { user } = await this.patientService.create(createPatientDto);
    const payload = {
      id: user._id,
      role: user.role as UserRole,
      email: user.email,
    };
    delete user.password;
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.userService.findByLogin(loginDto);
    const payload: Payload = {
      id: user._id,
      role: user.role as UserRole,
      email: user.email,
    };
    delete user.password;
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }
}
