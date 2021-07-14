import { h } from 'preact';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'preact/hooks';
import { getProductsData } from '../../services/api';

export const Products = () => {
  const [products, setProducts] = useState(null);
  const params = useParams();

  useEffect(() => {
    getProductsData().then((result) => {
      const findProducts = result.find(
        (item) => params.id === item.id,
      );
      setProducts(findProducts.products);
    });
  }, [params]);

  return (

    <If condition={products}>
      <For each="item" of={products}>
        <li key={item.id}>
          <p>{item.title}</p>
        </li>
      </For>
    </If>

  );
};
