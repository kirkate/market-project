import { h } from 'preact';
import { CartService } from '../../services/cartService';
import { Button } from '../Button';
export const CartTable = ({ cart }) => {
    const handleDeleteProduct = (id) => {
        CartService.deleteItem(id);
    };
    const handleChangeQuantity = (id, value) => {
        CartService.updateItemsQuantity(id, value);
    };
    return (h("form", null,
        h(If, { condition: cart.positions },
            h("ul", { class: "cartList" },
                h(For, { each: "position", of: cart.positions },
                    h("li", { key: index, class: "position" },
                        h("p", null, position.product.title),
                        h("input", { name: "productsQuantity", type: "number", class: "cart-form__input", value: position.quantity || 1, min: 1, max: 100, onChange: () => handleChangeQuantity(position.product.id, event.target.value) }),
                        h("span", null,
                            position.total,
                            "$"),
                        h(Button, { type: "button", onClick: () => handleDeleteProduct(position.product.id) }, "delete")))),
            h(If, { condition: cart.positions?.length > 0 },
                h("p", null,
                    "Total price $",
                    cart.total)))));
};
