import { h } from 'preact';

export const Button = ({ name, className, onClick }) => (
  <button class={className} type="button" onClick={onClick}>
    {name}
  </button>
);
