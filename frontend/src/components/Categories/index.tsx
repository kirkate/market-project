import { h } from 'preact';
import { useParams } from 'react-router-dom';
import { SideBar } from '../SideBar/index';

export const Categories = ({
  subCategories,
  onSubCategoryClick,
  categories,
  handleCategoryClick,
}) => {
  const params = useParams();
  return (
    <div class="filter-categoties">
      <SideBar categories={categories} onCategoryClick={handleCategoryClick} />
      <If condition={subCategories}>
        <ul class="subCategories">
          <For each="subCategory" of={subCategories}>
            <li key={subCategory.id} class="subCategory">
              <a
                data-id={subCategory.id}
                href={`/store/${params.categorySlug}/${subCategory.id}`}
                onClick={onSubCategoryClick.bind(null, subCategory.id)}
              >
                {subCategory.title}
              </a>
            </li>
          </For>
        </ul>
      </If>
    </div>
  );
};
