//import { ADD_USER } from "../actions/types";
const DEFAULT_STATE = {};
const userReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_USER":
      var a = Object.assign({}, state, payload);
      return a;
    default:
      return state;
  }
};
export default userReducer;
