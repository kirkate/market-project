import { h } from 'preact';
export const SideBar = ({ categories, onCategoryClick }) => (h("aside", { class: "sidebar" },
    h(If, { condition: categories },
        h("ul", { class: "categories" },
            h(For, { each: "category", of: categories },
                h("li", { key: category.id, class: "category" },
                    h("a", { href: `/store/${category.slug}`, onClick: onCategoryClick.bind(null, category.id) }, category.title)))))));
