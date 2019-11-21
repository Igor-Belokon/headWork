import React from "react";
import "../style.css";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import { regUser } from "../../store/action/data";

class Reg extends React.Component {
  state = {
    username: "",
    surname: "",
    gen: "",
    loyal: "",
    registered: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  userReg = () => {
    const user = {
      username: this.state.username,
      loyal: this.state.loyal,
      surname: this.state.surname,
      gen: this.state.gen
    };
    this.props.regUser(user).then(() => this.setState({ registered: true }));
  };

  render() {
    const { registered } = this.state;

    if (registered) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="reg1">
        <div className="reg-form">
          <h1>Registration</h1>
          <div className="reg2">
            <label>Username</label>
            <label>Surname</label>
            <label>gen</label>
            <label>loyal</label>
          </div>
          <div className="reg2">
            <input
              type="username"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />

            <input
              type="surname"
              name="surname"
              placeholder="Surname"
              value={this.state.surname}
              onChange={this.handleChange}
            />

            <input
              type="gen"
              name="gen"
              placeholder="gen"
              value={this.state.gen}
              onChange={this.handleChange}
            />

            <input
              type="loyal"
              name="loyal"
              placeholder="loyal"
              value={this.state.loyal}
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.userReg}>Registration</button>
        </div>
      </div>
    );
  }
}

export default connect(null, { regUser })(Reg);
