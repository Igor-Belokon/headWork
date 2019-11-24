import React from "react";
import "../style.css";

import { connect } from "react-redux";

import { myUsers } from "../../store/selectors/selectors";

import Users from "./users";

class Table extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.map(users => (
          <Users users={users}></Users>
        ))}
        {this.props.someData}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { users: myUsers(state) };
}
export default connect(mapStateToProps)(Table);
