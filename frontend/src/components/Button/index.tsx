import { h } from 'preact';

export const Button = ({
  children, className, onClick, type,
}) => (
  // eslint-disable-next-line react/button-has-type
  <button class={className} type={type} onClick={onClick}>
    {children}
  </button>
);
