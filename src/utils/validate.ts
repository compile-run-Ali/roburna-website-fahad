import { isEmpty, set, unset, clone } from "lodash";
import validator from "validator";
import moment, { isMoment } from "moment";

export const validateSingle = <T>(
  value: any,
  type: string,
  mandatory = true,
  extra: any = undefined
) => {
  const { newValue, newErrors } = validate<{ value?: T }>(
    {},
    {},
    value,
    "value",
    type,
    mandatory,
    extra
  );
  return { value: newValue?.value, error: newErrors?.value };
};

const validate = <T>(
  initial: T,
  errors: { [key: string]: string },
  value: any,
  name: string,
  type: string,
  mandatory = true,
  extra: any = undefined
) => {
  const newErrors = clone(errors);
  unset(newErrors, name);

  const newValue: Partial<T> = { ...initial };

  if (!isEmpty(value)) {
    if (type === "moment") {
      if (isMoment(value)) {
        set(newValue, name, value);
      } else if (typeof value === "string") {
        const momentValue = moment(value, true);
        if (momentValue.isValid()) set(newValue, name, momentValue);
        else set(newErrors, name, "Please use a correct format");
      } else {
        set(newErrors, name, "Please use a correct format");
      }
    } else if (type === "email") {
      if (validator.isEmail(value)) {
        set(newValue, name, value);
      } else {
        set(newErrors, name, "invalid email");
      }
    } else {
      set(newValue, name, value);
    }
  } else if (mandatory) {
    set(newErrors, name, "This field is required");
    set(newValue, name, null);
  }

  return { newValue, newErrors };
};

export default validate;
