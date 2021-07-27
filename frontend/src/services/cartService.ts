import { Storage } from '../utils/localStorage';

export namespace CartService {
  let cart = Storage.getItem(Storage.keys.cart) || [];
  let listeners = [];

  const updateCart = (newCartData) => {
    cart = newCartData;
    listeners.forEach((listener) => listener(cart));
    Storage.setItem(Storage.keys.cart, cart);
    Promise.resolve(cart);
  };
  export const addItem = (product) => {
    const hasCartProduct = cart.find((item) => item.id === product.id);
    if (hasCartProduct) {
      product.quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    updateCart(cart);
  };

  export const deleteItem = (id) => {
    const deleteProductFromList = cart.filter((item) => item.id !== id);
    cart = deleteProductFromList;
    updateCart(cart);
  };

  export const updateItemsQuantity = (id, value) => cart.find((item) => {
    if (item.id === id) {
      item.quantity = Number(value);
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
