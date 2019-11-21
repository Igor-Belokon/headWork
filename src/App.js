import React from "react";

import Login from "../src/components/login/login";
import MainForm from "../src/components/profile/prof";
import { isAuthenticated } from "../src/instance/instance";
import Edit from "../src/components/edit-user/edit";
import Reg from "../src/components/registration/reg";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);
function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <div>
            <Login></Login>
            <Route path="/public" component={MainForm} />
            <Route path="/reg" component={Reg} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/protected" component={Edit} />
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
