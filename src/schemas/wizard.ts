import * as yup from "yup";

export const wizardFormSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  country: yup.string().required('Country is required'),
  city: yup.string().required('City is required'),
  zipCode: yup.string().required('ZipCode is required'),
}).required();