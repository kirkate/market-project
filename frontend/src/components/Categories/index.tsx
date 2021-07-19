import { h } from 'preact';

import { useEffect, useState } from 'preact/hooks';
import { useParams, useHistory } from 'react-router-dom';
import { SideBar } from '../SideBar/index';
import { getCategoryData, getCaterogiesData } from '../../services/api';

export const Categories = ({ onSubCategoryClick }) => {
  const params = useParams();
  const history = useHistory();

  const [categories, setCategories] = useState(null);
  const [activeIdCategory, setActiveIdCategory] = useState('1');
  const [subCategories, setSubCatgories] = useState(null);

  useEffect(() => {
    getCaterogiesData().then((result) => {
      setCategories(result);
    });
  }, []);

  useEffect(() => {
    getCategoryData(activeIdCategory).then((data) => {
      data && setSubCatgories(data);
    });
  }, [params]);

  function handleCategoryClick(categoryId, event) {
    event.preventDefault();
    const category = categories.find((item) => item.id === categoryId);
    history.replace(category.slug);
    setActiveIdCategory(categoryId);
  }

  return (
    <div class="filter-categoties">
      <SideBar categories={categories} onCategoryClick={handleCategoryClick} />
      <If condition={subCategories}>
        <ul class="subCategories">
          <For each="subCategory" of={subCategories}>
            <li key={subCategory.id} class="subCategory">
              <a
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
