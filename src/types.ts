import mongoose, { Types } from 'mongoose';

export type UserType = 'researcher' | 'patient' | 'clinician';

export type UiSchema = {
  'ui:field'?: string;
  'ui:widget'?: string;
  'ui:options'?: {
    [key: string]: boolean | number | string | object | any[] | null;
  };
  'ui:order'?: string[];
  [name: string]: any;
  'ui:submitButtonOptions'?: UISchemaSubmitButtonOptions;
};

export type UISchemaSubmitButtonOptions = {
  submitText: string;
  norender: boolean;
  props: {
    disabled?: boolean;
    className?: string;
    [name: string]: any;
  };
};

export interface FilledQuestionnaire {
  questionnaire: mongoose.Schema.Types.ObjectId;
  time: Date;
  answers: Array<any>;
}

export interface Payload {
  id: Types.ObjectId;
  email: string;
  type: UserType;
}
