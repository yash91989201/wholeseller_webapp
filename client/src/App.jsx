import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "pages/LandingPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
      </Switch>
    </Router>
  );
};

export default App;
