export namespace ValidationUtil {
  export const validationTypes = {
    maxLength: 'maxLength',
    minLength: 'minLength',
    required: 'required',
    pattern: 'pattern',
  };

  const validationRules = {
    [validationTypes.maxLength]: (value, maxLength) => value?.length < maxLength,
    [validationTypes.minLength]: (value, minLength) => value?.length > minLength,
    [validationTypes.required]: (value, isRequired) => (isRequired ? value : true),
    [validationTypes.pattern]: (value, pattern) => new RegExp(pattern).test(value),
  };

  export const validateField = (
    fieldName,
    fieldValue,
    validations,
  ) => {
    const fieldValidations = validations[fieldName];
    const error = fieldValidations?.find(({ type, value }) => {
      const isValid = validationRules[type](fieldValue, value);
      return !isValid;
    });
    return error ? {
      type: error.type,
      message: error.message,
    } : null;
  };

  export const validate = (
    values,
    validations,
  ) => Object.entries(values).reduce(
    (acc, [fieldName, fieldValue]) => ({
      ...acc,
      [fieldName]: validateField(fieldName, fieldValue, validations),
    }), {},
  );
}
