import { h } from 'preact';
import { useState } from 'preact/hooks';

export const useFields = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};
