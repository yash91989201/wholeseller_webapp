import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import ShopPage from "pages/ShopPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </Router>
  );
};

export default App;
