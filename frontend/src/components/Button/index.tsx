import { h } from 'preact';

export const Button = ({ children, className, onClick }) => (
  <button class={className} type="button" onClick={onClick}>
    {children}
  </button>
);
