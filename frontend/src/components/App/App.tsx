import { h } from "preact";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Cart from "../../pages/Cart/Cart";
import Products from "../../pages/Products/Products";
import Checkout from "../../pages/Checkout/Checkout";
import NotFound from "../../pages/NotFound/NotFound";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route   path="/cart" component={Cart} />
      <Route  path="/products" component={Products} />
      <Route  path="/checkout" component={Checkout} />
      <Route path='*' exact={true} component={NotFound} />
    </Switch>
  );
};
export default App;