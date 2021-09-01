import { h } from 'preact';

export const ProductDetails = ({ product }) => (
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
        <If condition={product.attributes}>
          <ul>
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
