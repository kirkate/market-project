import { h, cloneElement } from 'preact';
import { useFormContext } from './context';

export function Fieldset({ label, name, children }) {
  const {
    values, errors, handleChange, className,
  } = useFormContext();
  return (
    <fieldset class={className}>
      <label htmlFor={name}>{ label }</label>
      <div>
        {cloneElement(children, {
          name,
          id: name,
          onChange: handleChange,
          onBlur: handleChange,
          value: values[name],
        })}
      </div>
      <If condition={errors[name]}>
        <div class="validation">{errors[name].message}</div>
      </If>
    </fieldset>
  );
}
