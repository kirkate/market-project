import { h } from 'preact';

export const Notification = ({ cartTrigger }) => (
  <div
    class={cartTrigger && 'notification'}
  />
);
