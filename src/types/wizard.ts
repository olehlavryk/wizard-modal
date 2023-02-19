import * as yup from "yup";
import { wizardFormSchema } from '@/src/schemas/wizard';

export type TWizardForm = {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  zipCode: string;
}

export type WizardFormData = yup.InferType<typeof wizardFormSchema>;