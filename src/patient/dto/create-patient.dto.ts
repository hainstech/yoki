export class CreatePatientDto {
  name: string;
  dob: Date;
  gender: String;
  language: String;
  research: boolean;
  terms: boolean;
  dataConsent: boolean;
  participantConsent: boolean;
  user: string;
}
