import { h } from 'preact';
import { Form } from '../Form';
import {
  deliveryType, initialValues, validations, сourierType,
} from '../../config/config';
import { Fieldset } from '../Form/Fieldset';
import { RadioGroup } from '../Form/FieldsetRadio';
import { RadioButton } from '../Form/RadioButton';
import { ConditionalSection } from '../Form/ConditionalSection';
import { Button } from '../Button';

export const CheckoutForm = () => {
  const { deliveryByPost, pickupInStore, сourier } = deliveryType;

  return (
    <Form initialValues={initialValues} validations={validations} class="form">
      <div class="form__client-info">
        <Fieldset class="form__input" label="First name" name="firstname">
          <input name="firstname" type="text" placeholder="Name" />
        </Fieldset>
        <Fieldset class="form__input" label="Phone" name="phone">
          <input name="phone" type="tel" placeholder="Phone number" />
        </Fieldset>
      </div>

      <RadioGroup name="deliveryType" class="form__radio-group">
        <p>Delivery type: </p>
        <RadioButton name="deliveryType" value={deliveryByPost}>
          Delivery
          by post
        </RadioButton>
        <RadioButton name="deliveryType" value={pickupInStore}>
          Pick
          Up In-Store
        </RadioButton>
        <RadioButton
          name="deliveryType"
          value={сourier}
        >
          Courier
        </RadioButton>
      </RadioGroup>
      <ConditionalSection name="deliveryType" value={deliveryByPost}>
        <div className="form__client-info">
          <Fieldset label="City" name="city">
            <input name="city" type="text" />
          </Fieldset>
          <Fieldset label="Post office №" name="postOffice">
            <input name="postOffice" type="text" />
          </Fieldset>
        </div>
      </ConditionalSection>
      <ConditionalSection name="deliveryType" value={pickupInStore}>
        <address class="form__address">Address: Antonovycha St, 176, Kyiv, 03150</address>
      </ConditionalSection>
      <ConditionalSection name="deliveryType" value={сourier}>
        <RadioGroup class="form__radio-group" name="сourierType">

          <RadioButton
            class="form__radio-button"
            name="сourierType"
            value={сourierType.express}
          >
            Express
          </RadioButton>
          <RadioButton
            class="form__radio-button"
            name="сourierType"
            value={сourierType.standard}
          >
            Standard
          </RadioButton>
        </RadioGroup>
      </ConditionalSection>
      <Fieldset label="Description" name="description">
        <textarea name="description" />
      </Fieldset>
      <Button class="regular-button" type="submit">Submit</Button>
    </Form>
  );
};
