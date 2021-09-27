import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../Button';
import { getIdBySlug, getProductsData } from '../../services/api';
import { CartService } from '../../services/cartService';
import { Container } from '../Container';
import { Notification } from '../Notification';

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
    <div>
      <Container>
        <div class="products">
          <div>
            <h1 class="products__title">{params.subCategorySlug}</h1>
          </div>

          <If condition={products}>
            <ul class="products__list">
              <For each="product" of={products}>
                <li key={product.id} class="products__item">
                  <Link class="products__link" product={product} to={`/products/${product.slug}`}>
                    <figure class="products__image-block">
                      <img
                        src={product.imageUrl}
                        alt="phone"
                        class="products__image"
                      />
                    </figure>
                    <div class="products__details">
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
                  <Button type="button" class="button--regular" onClick={() => handleAddToCart(product)}>
                    + add to cart
                  </Button>

                </li>
              </For>
            </ul>
          </If>

        </div>
      </Container>
      <Notification cartTrigger={cartTrigger} />
    </div>
  );
};
