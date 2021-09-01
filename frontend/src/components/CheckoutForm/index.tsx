import { h } from 'preact';
import { Form } from '../Form';
import {
  deliveryType, initialValues, validations, сourierType,
} from '../../config/config';
import { Fieldset } from '../Form/Fieldset';
import { RadioGroup } from '../Form/FieldsetRadio';
import { RadioButton } from '../Form/RadioButton';
import { ConditionalSection } from '../Form/ConditionalSection';

export const CheckoutForm = () => (

  <Form initialValues={initialValues} validations={validations} class="delivery-form">
    <Fieldset label="First name" name="firstname">
      <input name="firstname" type="text" />
    </Fieldset>
    <Fieldset label="Phone" name="phone">
      <input name="phone" type="tel" />
    </Fieldset>
    <RadioGroup name="deliveryType">
      <RadioButton name="deliveryType" value={deliveryType.deliveryByPost}>Delivery by post</RadioButton>
      <RadioButton name="deliveryType" value={deliveryType.pickupInStore}>Pick Up In-Store</RadioButton>
      <RadioButton name="deliveryType" value={deliveryType.сourier}>Courier</RadioButton>
    </RadioGroup>
    <ConditionalSection name="deliveryType" value={deliveryType.deliveryByPost}>
      <Fieldset label="City" name="city">
        <input name="city" type="text" />
      </Fieldset>
      <Fieldset label="Post office №" name="postOffice">
        <input name="postOffice" type="text" />
      </Fieldset>
    </ConditionalSection>
    <ConditionalSection name="deliveryType" value={deliveryType.pickupInStore}>
      <address>Address: Antonovycha St, 176, Kyiv, 03150</address>
    </ConditionalSection>
    <ConditionalSection name="deliveryType" value={deliveryType.сourier}>
      <RadioGroup name="сourierType">
        <RadioButton name="сourierType" value={сourierType.express}>Express</RadioButton>
        <RadioButton name="сourierType" value={сourierType.standard}>Standard</RadioButton>
      </RadioGroup>
    </ConditionalSection>
    <Fieldset label="Description" name="description">
      <textarea name="description" />
    </Fieldset>
    <button type="submit">Submit</button>
  </Form>
);
