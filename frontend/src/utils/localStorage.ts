export namespace Storage {
  let listeners = [];
  export const keys = { cart: 'cart', reset: null };
  export const getItem = (key) => JSON.parse(localStorage.getItem(key));

  export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    listeners.forEach((listener) => listener(key, value));
  };

  export const watch = (newListener) => {
    listeners.push(newListener);
    return () => {
      listeners = listeners.filter((listener) => newListener !== listener);
    };
  };

  export const removeItem = (key) => {
    localStorage.removeItem(key);
    listeners.forEach((listener) => listener(key, getItem(key)));
  };

  window.addEventListener('storage', (event) => {
    listeners.forEach((listener) => listener(event.key, getItem(event.key)));
  });
}
