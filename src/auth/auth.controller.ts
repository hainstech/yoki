import { Body, Controller, Post } from '@nestjs/common';
import { CarerService } from 'src/carer/carer.service';
import { CreateCarerDto } from 'src/carer/dto/create-carer.dto';
import { CreatePatientDto } from 'src/patient/dto/create-patient.dto';
import { PatientService } from 'src/patient/patient.service';
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
    let saneUser = this.userService.sanitizeUser(user);
    const payload = {
      id: user._id,
      type: user.type,
      email: user.email,
    };

    const token = await this.authService.signPayload(payload);
    return { saneUser, token };
  }

  @Post('carer')
  async registerPatient(@Body() createPatientDto: CreatePatientDto) {
    const { user } = await this.patientService.create(createPatientDto);
    let saneUser = this.userService.sanitizeUser(user);
    const payload = {
      id: user._id,
      type: user.type,
      email: user.email,
    };

    const token = await this.authService.signPayload(payload);
    return { saneUser, token };
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.userService.findByLogin(loginDto);
    const payload = {
      id: user._id,
      type: user.type,
      email: user.email,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }
}
