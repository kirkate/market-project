import { h } from 'preact';
export const RadioButton = ({ name, children, value, onChange, option, }) => (h("label", { htmlFor: name },
    h("input", { type: "radio", name: name, value: value, onChange: onChange, checked: option === value }),
    children));
