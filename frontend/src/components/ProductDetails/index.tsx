import { h } from 'preact';

export const ProductDetails = ({ product }) => (
  <div class="product__details">
    <h1>{product.title}</h1>
    <div className="product__block">
      <figure>
        <img alt="" src={product.imageUrl} />
      </figure>
      <div class="product__feature-block">
        <p className="description">
          {product.description}
        </p>
        <If condition={product.attributes}>
          <ul class="attributes">
            <For each="attribute" of={product.attributes}>
              <li>
                <p>
                  {attribute.name}
                  <span>{attribute.value}</span>
                </p>
              </li>
            </For>
          </ul>
        </If>
      </div>
      <div>
        <p>
          Price:
          {product.price}
          <span />
          $
        </p>
        <p>{product.count}</p>
        <button>Add</button>
      </div>
    </div>
  </div>

);
