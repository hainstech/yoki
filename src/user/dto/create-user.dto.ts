import { UserRole } from 'src/types';

export class CreateUserDto {
  email: string;
  role: UserRole;
  password: string;
  patientId: string | null;
  professionalId: string | null;
}

export class RegisterUserDto {
  email: string;
  password: string;
  patientId: string | null;
  professionalId: string | null;
}
