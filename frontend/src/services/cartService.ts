import { Storage } from "../utils/localStorage";

export namespace CartService {
  let cart = Storage.getItem(Storage.keys.cart) || {
    positions: [],
    total: 0,
  };

  let listeners = [];

  const updateCart = (newCartData) => {
    cart = { ...newCartData };
    cart.total = cart.positions.reduce(
      (sum, product) => Number(sum + product.total),
      0
    );
    listeners.forEach((listener) => listener(cart));
    Storage.setItem(Storage.keys.cart, cart);
  };

  export const addItem = (product) => {
    const position = cart.positions.find(
      (item) => item.product.id === product.id
    );
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
    updateCart(cart);
  };

  export const deleteItem = (id) => {
    const deleteProductFromList = cart.positions.filter(
      (item) => item.product.id !== id
    );

    cart.positions = deleteProductFromList;
    updateCart(cart);
  };

  export const updateItemsQuantity = (id, value) =>
    cart.positions.find((position) => {
      if (position.product.id === id) {
        position.quantity = value;
        position.total = position.quantity * position.product.price;
      }
      updateCart(cart);
    });

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
    if (Storage.keys.cart || Storage.keys.reset) {
      cart = value || [];
      listeners.forEach((listener) => listener(cart));
    }
  });
}
