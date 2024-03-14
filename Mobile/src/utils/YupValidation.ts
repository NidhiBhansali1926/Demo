import * as yup from 'yup';

const emailValidationSchema = yup
  .string()
  .required('email.require')
  .email('email.enterValidEmail')
  .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'email.enterValidEmail');

const passwordValidationSchema = (password: string) =>
  yup
    .string()
    .required(`${password}.require`)
    .matches(/^(?=.*[a-z])/, `${password}.mustIncludeLowerCase`)
    .matches(/^(?=.*[A-Z])/, `${password}.mustIncludeUpperCase`)
    .matches(/^(?=.*[0-9])/, `${password}.mustIncludeDigit`)
    .matches(/^(?=.*[!@#\$%\^&\*])/, `${password}.mustIncludeSpecialCharacter`)
    .matches(/^(?!.*(.)\1\1)/, `${password}.notContainTwoConsecutiveCharacter`)
    .min(8, `${password}.passwordLengthAtLeast`)
    .max(15, `${password}.passwordLengthMaximum`);
