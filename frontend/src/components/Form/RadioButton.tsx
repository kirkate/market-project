import { h } from 'preact';

export const RadioButton = ({
  name, children, value, onChange, currentValue, className,
}) => (
  <label htmlFor={name} class={className}>
    <input type="radio" name={name} value={value} onChange={onChange} checked={currentValue === value} />
    {children}
  </label>
);
