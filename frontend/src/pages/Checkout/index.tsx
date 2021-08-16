import { h } from 'preact';
import { Form } from '../../components/Form/index';
import { Fieldset } from '../../components/Form/Fieldset';
import { RadioGroup } from '../../components/Form/FieldsetRadio';
import { initialValues, validations, deliveryType } from '../../config/config';
import { RadioButton } from '../../components/Form/RadioButton';

export const Checkout = () => (
  <Form initialValues={initialValues} validations={validations} class="deliveryForm">
    <Fieldset label="First name" name="firstname">
      <input name="firstname" type="text" />
    </Fieldset>
    <Fieldset label="Phone" name="phone">
      <input name="phone" type="tel" />
    </Fieldset>
    <RadioGroup name="deliveryType">
      <RadioButton name="deliveryType" value={deliveryType.delivery}>Delivery by "Nova post"</RadioButton>
      <RadioButton name="deliveryType" value={deliveryType.pickup}>Pickup from our shops</RadioButton>
      <RadioButton name="deliveryType" value={deliveryType.сourier}>Courier</RadioButton>
    </RadioGroup>
    <Fieldset label="Description" name="description">
      <textarea name="description" />
    </Fieldset>
    <button type="submit">Submit</button>
  </Form>
);
