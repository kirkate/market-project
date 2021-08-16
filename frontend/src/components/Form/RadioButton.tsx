import { h } from 'preact';

export const RadioButton = ({
  name, children, value, onChange, option,
}) => (
  <label htmlFor={name}>
    <input type="radio" name={name} value={value} onChange={onChange} checked={option === value} />
    {children}
  </label>
);
