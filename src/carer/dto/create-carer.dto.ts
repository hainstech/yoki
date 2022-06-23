import { FilledQuestionnaire } from 'src/types';
import { RegisterUserDto } from 'src/user/dto/create-user.dto';

export class CreateCarerDto extends RegisterUserDto {
  name: string;
  language: string;
  user: string;
  filledQuestionnaires: Array<FilledQuestionnaire>;
}
