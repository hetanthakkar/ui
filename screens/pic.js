import React from "react";
import { Provider } from "react-redux";
import store from "./signup/store/index";
import Pic from "./image";
export default class Signup extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Pic navigation={this.props.navigation} />
      </Provider>
    );
  }
}
