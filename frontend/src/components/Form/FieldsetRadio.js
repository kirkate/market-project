import { h, cloneElement } from 'preact';
import { Children } from 'preact/compat';
import { useFormContext } from './context';
import { deliveryType } from '../../config/config';
import { DeliveryBlock } from '../DeliveryBlock';
export const RadioGroup = ({ children, name }) => {
    const { errors, handleChange, option } = useFormContext();
    const RenderChildren = () => (Children.map(children, (child) => cloneElement(child, {
        name,
        option,
        onChange: handleChange,
    })));
    return (h("fieldset", null,
        h(RenderChildren, null),
        option === deliveryType.delivery && (h(DeliveryBlock, null,
            h("address", null, "delivery"))),
        option === deliveryType.pickup && (h(DeliveryBlock, null,
            h("address", null, "Address: Antonovycha St, 176, Kyiv, 03150"))),
        option === deliveryType.сourier && (h(DeliveryBlock, null,
            h("p", null, "\u0441ourier"))),
        h(If, { condition: errors[name] },
            h("div", null, errors[name].message))));
};
