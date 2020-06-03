import Signup from "./screens/signup/Signup";
import { YellowBox } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Demo from "./screens/demo";
import Demo1 from "./screens/demo1";
import Pic from "./screens/pic";
import _ from "lodash";
YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};
export default createAppContainer(
  createSwitchNavigator(
    {
      Signup,
      Demo,
      Demo1,
      Pic,
    },
    {
      initialRouteName: "Signup",
    }
  )
);
