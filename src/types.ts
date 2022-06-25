import mongoose, { Types } from 'mongoose';

export type UserRole = 'researcher' | 'patient' | 'carer';

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
  formData: Array<any>;
}

export interface Payload {
  id: Types.ObjectId;
  email: string;
  role: UserRole;
}
