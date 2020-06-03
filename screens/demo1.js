import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import store from "./signup/store/index";
import Displayy from "./display1";
export default class Signup extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Displayy navigation={this.props.navigation} />
      </Provider>
    );
  }
}
