import { h } from 'preact';
import {
  useState, useCallback, useEffect,
} from 'preact/hooks';
import { ValidationUtil } from '../../../utils/validationUtils';

export const useForm = ({
  validations,
  initialValues,
  onSubmit,
}) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = useCallback((event) => {
    const { target } = event;
    const { name, value } = target;
    setValues((currentValues) => ({ ...currentValues, [name]: value }));
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: ValidationUtil.validateField(name, value, validations),
    }));
  }, []);
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const errorCheck = ValidationUtil.validate(values, validations);
    setErrors(errorCheck);
    setIsSubmitted(true);
  }, [values]);

  useEffect(() => {
    if (isSubmitted && JSON.stringify(errors) === '{}') {
      onSubmit(values);
    }
  }, [isSubmitted]);
  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};
