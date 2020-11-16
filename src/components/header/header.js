import React from "react";
import "../style.css";

import { Redirect, NavLink } from "react-router-dom";

export default class Header extends React.Component {
  state = {
    reg: false,
    allUsers: false,
    prof: false,
  };
  userRegis = () => {
    this.setState({ reg: true });
  };
  myUsers = () => {
    this.setState({ allUsers: true });
  };
  myProf = () => {
    this.setState({ prof: true });
  };
  render() {
    return (
      <div>
        <ul className="header-block">
          <NavLink className="header-button " to="/users">
            User List
          </NavLink>

          <NavLink className="header-button " to="/reg">
            Register
          </NavLink>

          <NavLink className="header-button " to="/prof">
            About me
          </NavLink>
        </ul>
      </div>
    );
  }
}
