import { ValidationError } from "class-validator";
import ErrorsForm from "./interfaces/errors-form";
import messages from "./messages";

const handleErrors = (validationError: ValidationError[]): ErrorsForm[] => {
  const errorsForm: ErrorsForm[] = [];
  validationError.forEach((error) => {
    const oKeys = Object.keys(error.constraints ?? {});
    const newError: ErrorsForm = {
      attribute: error.property,
      messages: oKeys.map((key) => messages(key)),
    };
    errorsForm.push(newError);
  });

  return errorsForm;
};

export default handleErrors;
