import { h } from 'preact';
import { useFormContext } from './context';

export const RadioGroup = ({ children, name, value }) => {
  const {
    errors, handleChange,
  } = useFormContext();
  return (
    <fieldset onChange={handleChange} value={value}>
      {children}
      <If condition={errors[name]}>
        <div>{errors[name].message}</div>
      </If>
    </fieldset>
  );
};
