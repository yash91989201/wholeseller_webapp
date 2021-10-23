import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import ShopPage from "pages/ShopPage";
import ProductPage from "pages/ProductPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/product" component={ProductPage} />
      </Switch>
    </Router>
  );
};

export default App;
