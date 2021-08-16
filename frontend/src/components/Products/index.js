import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Button } from '../Button';
import { getProductsData } from '../../services/api';
import { CartService } from '../../services/cartService';
export const Products = ({ activeSubIdCategory }) => {
    const [products, setProducts] = useState(null);
    const handleAddToCart = (product) => {
        CartService.addItem(product);
    };
    useEffect(() => {
        getProductsData(activeSubIdCategory).then((data) => data && setProducts(data.products));
    }, [activeSubIdCategory]);
    return (h(If, { condition: products },
        h("ul", { class: "products" },
            h(For, { each: "product", of: products },
                h("li", { key: product.id, class: "product" },
                    h("p", null, product.title),
                    h(Button, { onClick: () => handleAddToCart(product) }, "+ add to cart"))))));
};
