import React, { Fragment } from "react";
import './App.css';
import Navigation from "./components/layout/Navigation";
import Base from "./components/layout/Base";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>

    <Fragment>
      
      <Navigation />
      <Route exact path="/" component={Base} />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Fragment>
    </Router>
  );
}

export default App;
