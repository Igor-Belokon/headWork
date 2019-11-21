import { USER_LOGIN, successAction, failureAction } from "../types";
const initialState = {
  data: []
};

export default function User(state = initialState, action) {
  switch (action.type) {
    case successAction(USER_LOGIN):
      console.log(action);
      return {
        ...state,
        data: [...state.data, action.data]
      };

    default:
      return state;
  }
}
