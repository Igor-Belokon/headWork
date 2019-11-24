import { REG_FORM, USER_REG, successAction, failureAction } from "../types";
const initialState = {
  data: [
    {
      username: "John",
      surname: "Dou",
      gen: "male",
      loyal: 5555666677779999
    },
    {
      username: "Vasy",
      surname: "Pupkin",
      gen: "male",
      loyal: 5555666677778888
    },
    {
      username: "Ada",
      surname: "Laveis",
      gen: "female",
      loyal: 5555666677774444
    }
  ]
};

export default function User(state = initialState, action) {
  switch (action.type) {
    case successAction(USER_REG):
      console.log(action);
      return {
        ...state,
        data: [...state.data, action.data]
      };
    case successAction(REG_FORM):
      return {
        ...state,
        someData: [...state.someData, action.someData]
      };
    default:
      return state;
  }
}
