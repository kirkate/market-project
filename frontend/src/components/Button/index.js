import { h } from 'preact';
export const Button = ({ children, className, onClick, type, }) => (h("button", { class: className, type: type, onClick: onClick }, children));
