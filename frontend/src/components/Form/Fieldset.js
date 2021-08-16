import { h, cloneElement } from 'preact';
import { useFormContext } from './context';
export function Fieldset({ label, name, children }) {
    const { values, errors, handleChange, } = useFormContext();
    return (h("fieldset", null,
        h("label", { htmlFor: name }, label),
        h("div", null, cloneElement(children, {
            name,
            id: name,
            onChange: handleChange,
            onBlur: handleChange,
            value: values[name],
        })),
        h(If, { condition: errors[name] },
            h("div", null, errors[name].message))));
}
