import { h } from "preact";
import { Switch, Route } from 'react-router-dom'
import ProductsCatalog from './ProductsCatalog/ProductsCatalog';
import ProductDetails from './ProductDetails/ProductDetails';



const Products = ({match}) => {   
   return  ( <Switch>
      <Route  path='/products' component={ProductsCatalog}/>
      <Route  match={match} path='/products/:productId' component={ProductDetails}/>
    </Switch>)

  }

  
export default Products;