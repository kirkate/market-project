import { h } from 'preact';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { routes } from '../../constants/routes';

export const ProductDetails = ({ product, onHandleAddToCart }) => (
  <div class="product">
    <figure>
      <img src={product.imageUrl} alt="phone" />
    </figure>
    <div class="product__description">
      <div class="product__info info-details">
        <h3 class="info-details__title">{product.title}</h3>
        <p class="info-details__text">
          code :
          {' '}
          {' '}
          {product.code}
        </p>
        <If condition={product.availability}>
          <p class="info-details__text-availability">
            availability :
            {' '}
            {' '}
          </p>
        </If>
        <If condition={!product.availability}>
          <p class="info-details__text-unavailability">
            availability :
            {' '}
            {' '}
          </p>
        </If>

      </div>

      <div class="product__specifications">
        <If condition={product.attributes}>
          <ul class="product__attributies attributies">
            <For each="attribute" of={product.attributes}>
              <li class="product__attribute">
                <p>
                  {attribute.name}

                  :
                </p>
                <If condition={attribute.type === 'color'}>
                  <div className="product__attributies-color" style={{ backgroundColor: `${attribute.value}` }} />
                </If>
                <If condition={attribute.type !== 'color'}>
                  <span>{`${attribute.value}`}</span>
                </If>
              </li>
            </For>
          </ul>
        </If>
        <p class="product__price">
          {product.price}
          <span />
          $
        </p>
        <div class="product__actions">
          <Button class="regular-button" type="button" onClick={() => onHandleAddToCart(product)}>Add to Cart</Button>
          <Link class="product__actions-blue" onClick={() => onHandleAddToCart(product)} to={routes.checkout}>Buy Now</Link>
        </div>
      </div>
    </div>
  </div>

);
