import { Storage } from '../utils/localStorage';

export namespace CartService {
  let cart = Storage.getItem(Storage.keys.cart) || [];
  let listeners = [];

  export const syncWithLS = () => {
    listeners.forEach((listener) => listener(cart));
    Storage.setItem(Storage.keys.cart, cart);
    return Promise.resolve(cart);
  };
  export const addItem = (product) => {
    const cartProducts = cart.some((item) => item.id === product.id);
    if (cartProducts) {
      cart.map((item) => {
        if (item.id === product.id) {
          if (item.quantity) {
            item.quantity = Number(item.quantity + 1);
          } else {
            item.quantity = Number(2);
          }
        }
      });
    } else {
      cart.push(product);
    }
    syncWithLS();
  };

  export const deleteItem = (id) => {
    const deleteProductFromList = cart.filter((item) => item.id !== id);
    cart = deleteProductFromList;
    syncWithLS();
  };

  export const updateItemsQuantity = (id, value) => cart.map((item) => {
    if (item.id === id) {
      item.quantity = Number(value);
    }
    syncWithLS();
  });

  export const getItems = () => cart;

  export const watch = (newListener) => {
    listeners.push(newListener);
    return () => {
      listeners = listeners.filter((listener) => newListener !== listener);
    };
  };

  export const clearCart = () => {
    Storage.removeItem(Storage.keys.cart);
  };

  Storage.watch((key, value) => {
    if (Storage.keys.cart || Storage.keys.reset) {
      cart = value || [];
      listeners.forEach((listener) => listener(cart));
    }
  });
}
