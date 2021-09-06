import { h } from 'preact';
import { Button } from '../Button';

export const ProductDetails = ({ product, onHandleAddToCart }) => (
  <div class="product">
    <h1>{product.title}</h1>
    <div className="product__details">
      <figure>
        <img alt="" src={product.imageUrl} />
      </figure>
      <div class="product__details-description">
        <p>
          {product.description}
        </p>
        <div class="description">
          <If condition={product.attributes}>
            <ul class="attributies">
              <For each="attribute" of={product.attributes}>
                <li>
                  <p>
                    {attribute.name}
                    {' '}
                    :
                  </p>
                  {attribute.type === 'color'
                    ? <div class="attribute__color" style={{ backgroundColor: `${attribute.value}` }} /> : <span>{`${attribute.value}`}</span>}
                </li>
              </For>
            </ul>
          </If>
          <p>
            Price:
            {product.price}
            <span />
            $
          </p>
        </div>
        <Button onClick={() => onHandleAddToCart(product)}>Add</Button>
      </div>
    </div>
  </div>

);
