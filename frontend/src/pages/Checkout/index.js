import { h } from 'preact';
import { Form } from '../../components/Form/index';
import { Fieldset } from '../../components/Form/Fieldset';
import { RadioGroup } from '../../components/Form/FieldsetRadio';
import { initialValues, validations, deliveryType } from '../../config/config';
import { RadioButton } from '../../components/Form/RadioButton';
export const Checkout = () => (h(Form, { initialValues: initialValues, validations: validations, class: "deliveryForm" },
    h(Fieldset, { label: "First name", name: "firstname" },
        h("input", { name: "firstname", type: "text" })),
    h(Fieldset, { label: "Phone", name: "phone" },
        h("input", { name: "phone", type: "tel" })),
    h(RadioGroup, { name: "deliveryType" },
        h(RadioButton, { name: "deliveryType", value: deliveryType.delivery }, "Delivery by \"Nova post\""),
        h(RadioButton, { name: "deliveryType", value: deliveryType.pickup }, "Pickup from our shops"),
        h(RadioButton, { name: "deliveryType", value: deliveryType.сourier }, "Courier")),
    h(Fieldset, { label: "Description", name: "description" },
        h("textarea", { name: "description" })),
    h("button", { type: "submit" }, "Submit")));
