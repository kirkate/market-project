import { h } from 'preact';
import { Button } from '../Button';

export const CartTable = ({ cart, onDelete, onQuantityChange }) => (
  <form class='cart-form'>
    <If condition={cart.positions}>
      <table class="cart-form__list">
        <tbody>
        <For each="position" of={cart.positions}>
          <tr>
            <td>
              <p>{position.product.title}</p></td>
            <td>
            <fieldset>
            <input
              name="productsQuantity"
              type="number"
              class="cart-list__input"
              value={position.quantity || 1}
              min={1}
              max={100}
              onChange={() => onQuantityChange(position.product.id, event.target.value)}
            />
            </fieldset>
              </td>
            <td>
            <span>
              {position.total}
              $
            </span>
              </td>
            <td>
            <Button
              type="button"
              onClick={() => onDelete(position.product.id)}
            >
              delete
            </Button>
              </td>
          </tr>
        </For>
        </tbody>
      </table>
      <If condition={cart.positions?.length > 0}>
        <p class='cart-form__price'>
          Total price $
          {cart.total}
        </p>
      </If>
    </If>
  </form>
);
