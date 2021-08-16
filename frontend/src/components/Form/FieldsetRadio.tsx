import { h, cloneElement } from 'preact';
import { Children } from 'preact/compat';
import { useFormContext } from './context';
import { deliveryType } from '../../config/config';
import { DeliveryBlock } from '../DeliveryBlock';

export const RadioGroup = ({ children, name }) => {
  const { errors, handleChange, option } = useFormContext();

  const RenderChildren = () => (
    Children.map(children, (child) => cloneElement(child, {
      name,
      option,
      onChange: handleChange,
    })));
  return (
    <fieldset>
      <RenderChildren />
      {option === deliveryType.delivery && (
        <DeliveryBlock>
          <address>delivery</address>
        </DeliveryBlock>
      )}
      {option === deliveryType.pickup && (
        <DeliveryBlock>
          <address>Address: Antonovycha St, 176, Kyiv, 03150</address>
        </DeliveryBlock>
      )}
      {option === deliveryType.сourier && (
        <DeliveryBlock>
          <p>сourier</p>
        </DeliveryBlock>
      )}
      <If condition={errors[name]}>
        <div>{errors[name].message}</div>
      </If>
    </fieldset>
  );
};
