import { FilledQuestionnaire } from 'src/types';
import { RegisterUserDto } from 'src/user/dto/create-user.dto';

export class CreatePatientDto extends RegisterUserDto {
  name: string;
  dob: Date;
  gender: String;
  language: String;
  user: string;
  filledQuestionnaires: Array<FilledQuestionnaire>;
}
