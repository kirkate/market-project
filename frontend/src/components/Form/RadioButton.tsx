import { h } from 'preact';

export const RadioButton = ({
  name, children, value, onChange, currentValue,
}) => (
  <div class="radio-container">
    <input class="radio-container__input" type="radio" name={name} value={value} onChange={onChange} checked={currentValue === value} />
    <span class="radio-container__checkmark" />
    <label htmlFor={name} class="radio-container__text">
      {children}
    </label>
  </div>

);
