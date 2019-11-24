import React from "react";

import Header from "../src/components/header/header";
import MyProf from "../src/components/prof/prof";

import Table from "../src/components/users/table";

import Reg from "../src/components/registration/reg";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <div>
            <Header></Header>
            <Route path="/reg" component={Reg} />
            <Route path="/users" component={Table} />
            <Route path="/prof" component={MyProf} />
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
