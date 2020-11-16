import { USER_REG, successAction } from "../types";

export function regUser(user) {
  return (dispatch) => dispatch({ type: successAction(USER_REG), data: user });
}
