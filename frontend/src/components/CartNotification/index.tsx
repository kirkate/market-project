import { h } from 'preact';

export const CartNotification = ({ cartTrigger }) => (
  <div
    class={cartTrigger && 'cart-notification__trigger'}
  />
);
