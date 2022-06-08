import { JSONSchema7 } from 'json-schema';
import { UiSchema } from 'src/types';

export class CreateQuestionnaireDto {
  schema: JSONSchema7;
  uischema: UiSchema;
  title: string;
  language: string;
}
