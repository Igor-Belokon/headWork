import React from "react";

import Header from "../src/components/header/header";
import MyProf from "../src/components/prof/prof";
import Table from "../src/components/users/table";
import Reg from "../src/components/registration/reg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          
            <Header/>
            <Switch>
            <Route path="/reg"  > <Reg/></Route>
            <Route path="/users"  > <Table/></Route>
            <Route path="/prof"  > <MyProf/></Route>
            <Route path="/">
            <Redirect to="/reg" />
            </Route>
            </Switch>
          
        </Router>
      </Provider>
    </div>
  );
}

export default App;
