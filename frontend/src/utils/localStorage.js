export var Storage;
(function (Storage) {
    let listeners = [];
    Storage.keys = { cart: 'cart' };
    Storage.getItem = (key) => JSON.parse(localStorage.getItem(key));
    Storage.setItem = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
        listeners.forEach((listener) => listener(key, value));
    };
    Storage.watch = (newListener) => {
        listeners.push(newListener);
        return () => {
            listeners = listeners.filter((listener) => newListener !== listener);
        };
    };
    Storage.removeItem = (key) => {
        localStorage.removeItem(key);
        listeners.forEach((listener) => listener(key, Storage.getItem(key)));
    };
    window.addEventListener('storage', (event) => {
        listeners.forEach((listener) => listener(event.key, Storage.getItem(event.key)));
    });
})(Storage || (Storage = {}));
