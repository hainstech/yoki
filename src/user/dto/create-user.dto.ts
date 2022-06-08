import { UserType } from 'src/types';

export class CreateUserDto {
  email: string;
  type: UserType;
  password: string;
  roleId: string;
  patientId: string;
  professionalId: string;
}
