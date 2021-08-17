import { h } from 'preact';
import { useFormContext } from './context';

export const RadioGroup = ({ children, name }) => {
  const {
    errors, handleChange, values,
  } = useFormContext();

  return (
    <fieldset onChange={handleChange} currentValue={values[name]}>
      {children}
      <If condition={errors[name]}>
        <div>{errors[name].message}</div>
      </If>
    </fieldset>
  );
};
