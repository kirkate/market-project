import { h } from 'preact';

export const Button = ({
  children, className, onClick, type,
}) => (
  <button class={className} type={type} onClick={onClick}>
    {children}
  </button>
);
