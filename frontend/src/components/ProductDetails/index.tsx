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
      <div class="product__description-main">
        <h3>{product.title}</h3>
        <p>
          code :
          {' '}
          {' '}
          {product.code}
        </p>
        <If condition={product.availability}>
          <p class="availability">
            availability :
            {' '}
            {' '}
          </p>
        </If>
        <If condition={!product.availability}>
          <p class="unavailability">
            availability :
            {' '}
            {' '}
          </p>
        </If>

      </div>

      <div class="product__description-info">
        <If condition={product.attributes}>
          <ul class="attributies">
            <For each="attribute" of={product.attributes}>
              <li>
                <p>
                  {attribute.name}

                  :
                </p>
                <If condition={attribute.type === 'color'}>
                  <div className="attribute__color" style={{ backgroundColor: `${attribute.value}` }} />
                </If>
                <If condition={attribute.type !== 'color'}>
                  <span>{`${attribute.value}`}</span>
                </If>
              </li>
            </For>
          </ul>
        </If>
        <p class="price">
          {product.price}
          <span />
          $
        </p>
        <div class="action">

          <Button type="button" onClick={() => onHandleAddToCart(product)}>Add to Cart</Button>
          <Link class="button" onClick={() => onHandleAddToCart(product)} to={routes.checkout}>Buy Now</Link>
        </div>

      </div>

    </div>

  </div>

);
