import { h } from "preact";
import { CartService } from "../../services/cartService";
import { Button } from "../Button";

export const CartTable = ({ cart }) => {
  const handleDeleteProduct = (id) => {
    CartService.deleteItem(id);
  };

  const handleChangeQuantity = (id, value) => {
    CartService.updateItemsQuantity(id, value);
  };

  return (
    <form>
      <If condition={cart.positions}>
        <ul class="cartList">
          <For each="position" of={cart.positions}>
            <li key={index} class="position">
              <p>{position.product.title}</p>
              <input
                name="productsQuantity"
                type="number"
                class="cart-form__input"
                value={position.quantity || 1}
                min={1}
                max={100}
                onChange={() =>
                  handleChangeQuantity(position.product.id, event.target.value)
                }
              />
              <span>{position.total}$</span>
              <Button
                type="button"
                onClick={() => handleDeleteProduct(position.product.id)}
              >
                delete
              </Button>
            </li>
          </For>
        </ul>
        <If condition={cart.positions?.length > 0}>
          <p>Total price ${cart.total}</p>
        </If>
      </If>
    </form>
  );
};
