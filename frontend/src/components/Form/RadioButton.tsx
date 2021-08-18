import { h } from 'preact';

export const RadioButton = ({
  name, children, value, onChange, currentValue,
}) => (
  <label htmlFor={name}>
    <input type="radio" name={name} value={value} onChange={onChange} checked={currentValue === value} />
    {children}
  </label>
);
