import React from "react";
import "../style.css";

export default class Users extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.username}
        {this.props.users.surname}
        {this.props.users.gen}
        {this.props.users.loyal}
      </div>
    );
  }
}
