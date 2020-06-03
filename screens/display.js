import * as React from "react";
import { Text, View, TouchableOpacity, Image, BackHandler } from "react-native";
import styles from "./signup/selectstyle";
import { connect } from "react-redux";
import addUser from "../../ui/screens/signup/actions/index";

class Display extends React.Component {
  componentDidMount() {
    console.log("Pic " + JSON.stringify(this.props.user.userReducer));

    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  handleBackButton = () => {
    this.props.navigation.navigate("Signup");
    return true;
  };
  submit = (param) => {
    if (param == "teach") this.props.navigation.navigate("Demo1");
    if (param == "learn") {
      this.props.navigation.navigate("Pic");
      this.props.addUser({ skill: "gawar" });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>What Would You Like To Do?</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#1C2B56",
          }}
        >
          <TouchableOpacity
            onPress={() => this.submit("learn")}
            style={styles.learnButton}
          >
            <Text style={styles.learnText}>Learn</Text>
            <Image
              style={styles.learnIcon}
              source={{
                uri:
                  "https://i.pinimg.com/originals/57/1a/07/571a0765d183c18530d1e4c0ba730c9c.jpg",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.submit("teach")}
            style={styles.teachButton}
          >
            <Text style={styles.teachText}>Teach</Text>
            <Image
              style={styles.teachIcon}
              source={{
                uri:
                  "https://i.pinimg.com/originals/26/a0/f5/26a0f58e15a5cea985516ee1dc5bee2a.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (value) => dispatch(addUser(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
