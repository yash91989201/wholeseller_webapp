import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Public from "./pages/Public";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/public/products" component={Public}></Route>
      </Switch>
    </Router>
  );
};

export default App;
