import React from "react";
import "../style.css";
import axios from "axios";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import { regUser, regForm } from "../../store/action/data";

import { myData } from "../../store/selectors/selectors";

class Reg extends React.Component {
  state = {
    username: "",
    surname: "",
    gen: "",
    loyal: "",
    reg: false
  };
  componentDidMount() {
    this.props.regForm();
    axios
      .get("https://meowfacts.herokuapp.com")
      .then(data => this.props.sameDa);
    console.log("Chek data", this.props.sameDa);
  }
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
    if (
      user.loyal.length === 16 &&
      (user.gen === "male" || user.gen === "female")
    ) {
      this.props.regUser(user);
      this.setState({ reg: true });
    } else {
      alert("gender or loyal ar wrong");
    }
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
        <div className="sameData">{this.props.sameDa}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { sameData: myData(state) };
}
export default connect(mapStateToProps, { regForm, regUser })(Reg);
