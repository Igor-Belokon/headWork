import React from "react";
import "../style.css";

export default class Users extends React.Component {
  render() {
    return (
      <div className="search">
        <div className="header">{this.props.users.username}</div>
        <div className="header"> {this.props.users.surname}</div>
        <div className="header"> {this.props.users.gen}</div>
        <div className="header">{this.props.users.loyal}</div>
      </div>
    );
  }
}
