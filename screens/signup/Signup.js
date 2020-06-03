import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import store from "./store/index";
import Myform from "./signupForm/index";
export default class Signup extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "#003f5c" }}>
        <Provider store={store}>
          <Myform navigation={this.props.navigation} />
        </Provider>
      </View>
    );
  }
}
