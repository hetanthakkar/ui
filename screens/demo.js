import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import store from "./signup/store/index";
import Display from "./display";
export default class Signup extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Display navigation={this.props.navigation} />
      </Provider>
    );
  }
}
