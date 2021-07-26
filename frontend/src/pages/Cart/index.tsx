import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { CartService } from '../../services/cartService';

export const Cart = () => {
  const [cart, setCart] = useState(CartService.getItems());

  useEffect(() => {
    CartService.watch(setCart);
  }, []);

  const handleDeleteProduct = (id) => {
    CartService.deleteItem(id);
  };
  const handleClear = () => {
    CartService.clearCart();
  };
  const handleChangeQuantity = (id, { target: { value } }) => {
    CartService.updateItemsQuantity(id, value);
  };

  return (
    <section>
      { cart ? (
        <p>
          Cart (
          {cart.length}
          )
        </p>
      ) : <p>Cart is empty</p>}
      <If condition={cart}>
        <ul class="cartList">
          <For each="cartItem" of={cart}>
            <li key={index} class="cartItem">
              <p>{cartItem.title}</p>
              <input
                id="count"
                type="number"
                class="cart-form__input"
                value={cartItem.quantity || 1}
                min={1}
                max={100}
                onChange={() => handleChangeQuantity(cartItem.id, event)}
              />
              <button type="button" onClick={() => handleDeleteProduct(cartItem.id)}>
                delete
              </button>
            </li>
          </For>
        </ul>
      </If>
      {cart && cart.length > 0 && <button type="button" onClick={handleClear}>Clear all</button>}
    </section>
  );
};
