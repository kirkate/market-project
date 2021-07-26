import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { CartService } from '../../services/cartService';

export const Cart = () => {
  const [cart, setCart] = useState(CartService.getItems());
  const [quantityProducts, setQuantityProducts] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    CartService.watch(setCart);
  }, []);

  useEffect(() => {
    setTotalPrice(
      cart.reduce((sum, i) => sum + i.price * (i.quantity || 1), 0),
    );
  }, [cart.length, quantityProducts]);

  const handleDeleteProduct = (id) => {
    CartService.deleteItem(id);
  };
  const handleClearCart = () => {
    CartService.clearCart();
  };
  const handleChangeQuantity = (id, { target: { value } }) => {
    CartService.updateItemsQuantity(id, value);
    setQuantityProducts(Number(value));
  };
  const handleSubmitPurchases = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <p>
        Cart (
        {cart.length}
        )
      </p>
      <form onSubmit={handleSubmitPurchases}>
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
                <span>
                  {cartItem.quantity
                    ? cartItem.price * cartItem.quantity
                    : cartItem.price}
                  {' '}
                  $
                </span>
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(cartItem.id)}
                >
                  delete
                </button>
              </li>
            </For>
          </ul>
        </If>
        {cart && cart.length > 0 && (
        <div>
          <button type="button" onClick={handleClearCart}>
            Clear all
          </button>
          <div>
            <p>Total price</p>
            <span>
              $
              {totalPrice}
            </span>
          </div>
          <button type="submit">Purchase</button>
        </div>
        )}
      </form>
    </section>
  );
};
