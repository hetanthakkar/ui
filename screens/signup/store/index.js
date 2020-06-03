import { createStore } from "redux";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import userReducer from "../reducers/index";
const mainReducer = combineReducers({
  form: formReducer, //this is for redux-form if u include this or dont the error will persist
  userReducer: userReducer,
});

const store = createStore(mainReducer);
export default store;
