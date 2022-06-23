import { UserType } from 'src/types';

export class CreateUserDto {
  email: string;
  type: UserType;
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
