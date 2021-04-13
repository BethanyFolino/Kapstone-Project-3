import React, { Fragment, useEffect } from "react";
import "./App.css";
import Navigation from "./components/layout/Navigation";
import Base from "./components/layout/Base";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Alert from "./components/layout/Alert";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navigation />
          <Route exact path="/" component={Base} />
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
