import React from "react";
import "../style.css";


import { Redirect, NavLink} from "react-router-dom";

export default class Header extends React.Component {
  state = {
    reg: false,
    allUsers: false,
    prof: false
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
    // const { reg } = this.state;
    // const { allUsers } = this.state;
    // const { prof } = this.state;

    // if (reg) {
    //   return <Redirect to="/reg" />;
    // }
    // if (allUsers) {
    //   return <Redirect to="/users" />;
    // }
    // if (prof) {
    //   return <Redirect to="/prof" />;
    // }
    return (
      <div>
        {/* <button onClick={this.userRegis}> Registration</button>
        <button onClick={this.myUsers}> All Users</button>
        <button onClick={this.myProf}>MY Profile</button> */}
        <ul>
      <li>
        <NavLink to="/users">User List</NavLink>
      </li>
      <li>
        <NavLink to="/reg">Register</NavLink>
      </li>
      <li>
        <NavLink to="/prof">About me</NavLink>
      </li>
    </ul>
      </div>
    );
  }
}
