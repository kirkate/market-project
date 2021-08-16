import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { useParams, useHistory } from 'react-router-dom';
import { SideBar } from '../SideBar';
import { getCategoryData, getCaterogiesData } from '../../services/api';
export const Categories = ({ onSubCategoryClick }) => {
    const params = useParams();
    const history = useHistory();
    const [categories, setCategories] = useState(null);
    const [activeIdCategory, setActiveIdCategory] = useState('1');
    const [subCategories, setSubCategories] = useState(null);
    useEffect(() => {
        getCaterogiesData().then((result) => {
            setCategories(result);
        });
    }, []);
    useEffect(() => {
        getCategoryData(activeIdCategory).then((data) => data && setSubCategories(data));
    }, [params]);
    function handleCategoryClick(categoryId, event) {
        event.preventDefault();
        const category = categories.find((item) => item.id === categoryId);
        history.replace(category.slug);
        setActiveIdCategory(categoryId);
    }
    return (h("div", { class: "filter-categories" },
        h(SideBar, { categories: categories, onCategoryClick: handleCategoryClick }),
        h(If, { condition: subCategories },
            h("ul", { class: "subCategories" },
                h(For, { each: "subCategory", of: subCategories },
                    h("li", { key: subCategory.id, class: "subCategory" },
                        h("a", { href: `/store/${params.categorySlug}/${subCategory.id}`, onClick: onSubCategoryClick.bind(null, subCategory.id) }, subCategory.title)))))));
};
