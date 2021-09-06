import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../Button';
import { getIdBySlug, getProductsData } from '../../services/api';
import { CartService } from '../../services/cartService';
import { Container } from '../Container';

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
    <Container>
      <If condition={products}>
        <ul class="products">
          <For each="product" of={products}>
            <li key={product.id} class="products__info">
              <Link product={product} to={`/products/${product.slug}`}>
                <figure>
                  <img
                    src={product.imageUrl}
                  />
                </figure>
                <div class="products__info-details">
                  <p>
                    {product.title}
                    {' '}
                  </p>
                  <p>
                    {product.price}
                    $
                  </p>
                </div>
              </Link>
              <Button class="products__info-button" onClick={() => handleAddToCart(product)}>
                + add to cart
              </Button>

            </li>
          </For>
        </ul>
      </If>
    </Container>
  );
};
