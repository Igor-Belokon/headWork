import React from "react";
import "../style.css";
import axios from "axios";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import { regUser } from "../../store/action/data";

import { myData } from "../../store/selectors/selectors";

class Reg extends React.Component {
  state = {
    username: "",
    surname: "",
    gen: "",
    loyal: "",
    reg: false,
    withLoyaltyProgram: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  userReg = () => {
    const user = {
      username: this.state.username,
      loyal: this.state.loyal,
      surname: this.state.surname,
      gen: this.state.gen,
    };

    this.props.regUser(user);
    this.setState({ reg: true });
  };

  render() {
    const { reg } = this.state;
    if (reg) {
      return <Redirect to="/users" />;
    }
    return (
      <div className="reg1">
        <div className="reg-form">
          <h1>Registration</h1>
          <div className="reg2"></div>
          <div className="reg2">
            <label>Username</label>
            <input
              type="username"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label>Surname</label>
            <input
              type="surname"
              name="surname"
              placeholder="Surname"
              value={this.state.surname}
              onChange={this.handleChange}
            />

            <div className="gen-box">
              <label>gen</label>
              <p>
                <input
                  type="checkbox"
                  name="gen"
                  value="male"
                  onChange={this.handleChange}
                />{" "}
                male{" "}
              </p>
              <p>
                <input
                  type="checkbox"
                  name="gen"
                  value="female"
                  onChange={this.handleChange}
                />{" "}
                female
              </p>
            </div>

            <label>
              Use coupon?
              <input
                type="checkbox"
                value={this.state.withLoyaltyProgram}
                name="withLoyaltyProgram"
                onChange={this.handleChange}
              />
            </label>
            {this.state.withLoyaltyProgram ? (
              <label>
                Coupon
                <input
                  type="text"
                  value={this.state.userCoupon}
                  name="loyal"
                  onChange={this.handleChange}
                />
              </label>
            ) : null}
          </div>
          <button onClick={this.userReg}>Registration</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { sameData: myData(state) };
}
export default connect(mapStateToProps, { regUser })(Reg);
