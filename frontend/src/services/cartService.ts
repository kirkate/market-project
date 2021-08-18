import { Storage } from '../utils/localStorage';

export namespace CartService {
  const initialCart = {
    positions: [],
    total: 0,
  };
  let cart = Storage.getItem(Storage.keys.cart) || initialCart;
  let listeners = [];

  const updateCart = () => {
    cart = { ...cart };
    cart.total = cart.positions.reduce(
      (sum, product) => Number(sum + product.total),
      0,
    );

    Storage.setItem(Storage.keys.cart, cart);
  };

  export const addItem = (product) => {
    const position = cart.positions.find((item) => item.product.id === product.id);
    if (position) {
      position.quantity = Number(position.quantity + 1);
      position.total = Number(position.quantity * position.product.price);
    } else {
      cart.positions.push({
        product,
        quantity: 1,
        total: Number(product.price),
      });
    }
    updateCart();
  };

  export const deleteItem = (id) => {
    cart.positions = cart.positions.filter((item) => item.product.id !== id);
    updateCart();
  };

  export const updateItemsQuantity = (id, value) => {
    const position = cart.positions.find(({ product }) => product.id === id);
    position.quantity = value;
    position.total = position.quantity * position.product.price;

    updateCart();
  };

  export const getItems = () => cart;

  export const watch = (newListener) => {
    listeners.push(newListener);
    return () => {
      listeners = listeners.filter((listener) => newListener !== listener);
    };
  };

  export const clearCart = () => {
    Storage.setItem(Storage.keys.cart, []);
  };

  Storage.watch((key, value) => {
    if (key === Storage.keys.cart) {
      cart = value || initialCart;
      listeners.forEach((listener) => listener(cart));
    }
  });
}
