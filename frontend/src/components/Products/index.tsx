import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../Button';
import { getIdBySlug, getProductsData } from '../../services/api';
import { CartService } from '../../services/cartService';

export const Products = () => {
  const params = useParams();
  const [products, setProducts] = useState(null);

  const handleAddToCart = (product) => {
    CartService.addItem(product);
  };
  useEffect(() => {
    const subCategoryID = getIdBySlug(params.subCategorySlug, 'subCategories');
    getProductsData(subCategoryID).then((data) => setProducts(data.products));
  }, [params.subCategorySlug]);

  return (
    <If condition={products}>
      <ul class="products">
        <For each="product" of={products}>
          <li key={product.id} class="products__product">
            <figure>
              <img
                src={product.imageUrl}
              />
            </figure>
            <Link product={product} to={`/products/${product.slug}`}>{product.title}</Link>
            <p>
              {product.price}
              $
            </p>
            <Button onClick={() => handleAddToCart(product)}>
              + add to cart
            </Button>
          </li>
        </For>
      </ul>
    </If>
  );
};
