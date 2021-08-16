import { h } from 'preact';
import { Route, useHistory, useLocation, Switch, } from 'react-router-dom';
import { useEffect, useState } from 'preact/hooks';
import { Container } from '../../components/Container';
import { Categories } from '../../components/Categories';
import { Products } from '../../components/Products';
export const Store = () => {
    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        if (history.location.pathname === '/store') {
            history.replace('/store/iphone');
        }
    }, []);
    const [activeSubIdCategory, setActiveSubIdCategory] = useState(null);
    function handleSubCategoryClick(subCategoryId, event) {
        event.preventDefault();
        history.push(`${location.pathname}/${subCategoryId}`);
        setActiveSubIdCategory(subCategoryId);
    }
    return (h(Container, null,
        h("section", { class: "store" },
            h(Switch, null,
                h(Route, { path: "/store/:categorySlug/:subCategorySlug", render: () => (h(Products, { activeSubIdCategory: activeSubIdCategory })) }),
                h(Route, { path: "/store/:categorySlug", exact: true, render: () => (h(Categories, { onSubCategoryClick: handleSubCategoryClick })) })))));
};
