import { h } from 'preact';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { routes } from '../../constants/routes';

export const ProductDetails = ({ product, onHandleAddToCart }) => (
  <div class="product-details">
    <figure>
      <img src={product.imageUrl} alt="phone" />
    </figure>
    <div class="product-details__description">
      <div class="product-details__info">
        <h3 class="product-details__title">{product.title}</h3>
        <p class="product-details__text">
          code :
          {' '}
          {' '}
          {product.code}
        </p>
        <If condition={product.availability}>
          <p class="product-details__text-availability">
            availability :
            {' '}
            {' '}
          </p>
        </If>
        <If condition={!product.availability}>
          <p class="product-details__text-unavailability">
            availability :
            {' '}
            {' '}
          </p>
        </If>

      </div>

      <div class="product-details__specifications">
        <If condition={product.attributes}>
          <ul class="product-details__attributies-list ">
            <For each="attribute" of={product.attributes}>
              <li class="product-details__attribute">
                <p>
                  {attribute.name}

                  :
                </p>
                <If condition={attribute.type === 'color'}>
                  <div
                    class="product-details__attributies-color"
                    style={{ backgroundColor: `${attribute.value}` }}
                  />
                </If>
                <If condition={attribute.type !== 'color'}>
                  <span>{`${attribute.value}`}</span>
                </If>
              </li>
            </For>
          </ul>
        </If>
        <p class="product-details__price">
          {product.price}
          <span />
          $
        </p>
        <div class="product-details__actions">
          <Button
            class="button--regular"
            type="button"
            onClick={() => onHandleAddToCart(product)}
          >
            Add to Cart
          </Button>

          <Link
            class="product-details__actions-blue"
            onClick={() => onHandleAddToCart(product)}
            to={routes.checkout}
          >
            Buy Now
          </Link>

        </div>
      </div>
    </div>
  </div>

);
