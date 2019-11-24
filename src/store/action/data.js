import { REG_FORM, USER_REG, successAction, failureAction } from "../types";

import axios from "axios";

export function regUser(user) {
  return dispatch => user =>
    dispatch({ type: successAction(USER_REG), data: user });
}
export function regForm() {
  return dispatch =>
    axios
      .get("https://meowfacts.herokuapp.com/")
      .then(data => dispatch({ type: successAction(REG_FORM), data }))
      .catch(err => dispatch({ type: failureAction(REG_FORM), err }));
}
