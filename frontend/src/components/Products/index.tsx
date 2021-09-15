import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../Button';
import { getIdBySlug, getProductsData } from '../../services/api';
import { CartService } from '../../services/cartService';
import { Container } from '../Container';
import { CartNotification } from '../CartNotification';

export const Products = () => {
  const params = useParams();
  const [products, setProducts] = useState(null);
  const [cartTrigger, setCartTrigger] = useState(false);

  const handleAddToCart = (product) => {
    CartService.addItem(product);
    setCartTrigger(true);
    setTimeout(() => setCartTrigger(false), 2000);
  };
  useEffect(() => {
    const subCategoryID = getIdBySlug(params.subCategorySlug, 'subCategories');
    getProductsData(subCategoryID).then((data) => setProducts(data.products));
  }, [params.subCategorySlug]);

  return (
    <Container>
      <div class="products-page">
        <div>
          <h1>{params.subCategorySlug}</h1>
        </div>

        <If condition={products}>
          <ul class="products-page__list">
            <For each="product" of={products}>
              <li key={product.id} class="products-page__list-info">
                <Link product={product} to={`/products/${product.slug}`}>
                  <figure>
                    <img
                      src={product.imageUrl}
                      alt="phone"
                    />
                  </figure>
                  <div class="info-details">
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
                <Button type="button" class="products-page__list-button" onClick={() => handleAddToCart(product)}>
                  + add to cart
                </Button>

              </li>
            </For>
          </ul>
        </If>

        <CartNotification cartTrigger={cartTrigger} />
      </div>
    </Container>
  );
};
