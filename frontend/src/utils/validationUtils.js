export var ValidationUtil;
(function (ValidationUtil) {
    ValidationUtil.validationTypes = {
        maxLength: 'maxLength',
        minLength: 'minLength',
        required: 'required',
        pattern: 'pattern',
    };
    const validationRules = {
        [ValidationUtil.validationTypes.maxLength]: (value, maxLength) => value?.length < maxLength,
        [ValidationUtil.validationTypes.minLength]: (value, minLength) => value?.length > minLength,
        [ValidationUtil.validationTypes.required]: (value, isRequired) => (isRequired ? value : true),
        [ValidationUtil.validationTypes.pattern]: (value, pattern) => new RegExp(pattern).test(value),
    };
    ValidationUtil.validateField = (fieldName, fieldValue, validations) => {
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
    ValidationUtil.validate = (values, validations) => Object.entries(values).reduce((acc, [fieldName, fieldValue]) => ({
        ...acc,
        [fieldName]: ValidationUtil.validateField(fieldName, fieldValue, validations),
    }), {});
})(ValidationUtil || (ValidationUtil = {}));
