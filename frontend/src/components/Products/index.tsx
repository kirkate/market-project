import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Button } from '../Button/index';
import { getProductsData } from '../../services/api';

export const Products = ({ activeSubIdCategory }) => {
  const [products, setProducts] = useState(null);

  const handleAddToCart = () => {};

  useEffect(() => {
    getProductsData(activeSubIdCategory).then((data) => {
      data && setProducts(data.products);
    });
  }, [activeSubIdCategory]);

  return (
    <If condition={products}>
      <ul class="products">
        <For each="product" of={products}>
          <li key={product.id} class="product">
            <p>{product.title}</p>
            <Button onClick={handleAddToCart}>+ add to cart</Button>
          </li>
        </For>
      </ul>
    </If>
  );
};
