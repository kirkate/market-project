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

  return (
    <If condition={products}>
      <ul class="products">
        <For each="product" of={products}>
          <li key={product.id} class="product">
            <p>{product.title}</p>
            <Button onClick={() => handleAddToCart(product)}>
              + add to cart
            </Button>
          </li>
        </For>
      </ul>
    </If>
  );
};
