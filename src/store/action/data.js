import { USER_LOGIN, USER_REG, successAction, failureAction } from "../types";

import { tokenRead, instance } from "../../instance/instance";

export function regUser(user) {
  return dispatch =>
    instance
      .post("http://68.183.119.148/api/test/register", user)

      .catch(err => dispatch({ type: failureAction(USER_REG), err }));
}
export function editUser(user) {
  return dispatch =>
    instance
      .post("http://68.183.119.148/api/test/edit-user", user) // Redux Thunk handles these

      .then(data => {
        tokenRead(data.token);
      })
      .catch(err => dispatch({ type: failureAction(USER_LOGIN), err }));
}
