import { h } from 'preact';

export const RadioButton = ({
  name, children, value, onChange, currentValue,
}) => (
  <div class="radio">
    <input
      class="radio__input"
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
      checked={currentValue === value}
    />
    <span class="radio__checkmark" />
    <label htmlFor={name} class="radio__text">
      {children}
    </label>
  </div>

);
