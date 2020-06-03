import { connect } from "react-redux";
import addUser from "./signup/actions/index";
import * as React from "react";
import {
  Text,
  View,
  BackHandler,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import styles from "./skillstyle";
import { Picker } from "react-native-picker-dropdown";
import { TextInput } from "react-native-gesture-handler";
import { isAndroidPlastForm } from "../helper/index";

var screenWidth = Math.round(Dimensions.get("window").width) / 100;

class Display1 extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  constructor(props) {
    super(props);
    this.state = {
      skill: "",
      specifics: "",
    };
  }
  handleBackButton = () => {
    this.props.navigation.navigate("Demo");
    return true;
  };

  updateSpecifics = (value) => {
    console.log("enters");
    this.setState({ specifics: value });
  };

  updateSkill = (skill) => {
    this.setState({ skill });
    this.setState({ specifics: "" });
    console.log(this.state.skill);
  };
  getCities = () => {
    if (this.state.skill === "Computer Language")
      return [
        "Enter Language",
        "C",
        "C++",
        "Java",
        "JavaScript",
        "Python",
        "Other",
      ].map((specifics) => <Picker.Item label={specifics} value={specifics} />);
    if (this.state.skill === "New Language")
      return [
        "Enter Language",
        "English",
        "Spanish",
        "French",
        "Japanese",
        "Italian",
        "German",
        "Other",
      ].map((specifics) => <Picker.Item label={specifics} value={specifics} />);

    if (this.state.skill === "Musical Instrument")
      return [
        "Enter Instrument",
        "Piano/Keyboard",
        "Drum",
        "FLute",
        "Guitar",
        "Sitar",
        "Other",
      ].map((specifics) => <Picker.Item label={specifics} value={specifics} />);

    if (this.state.skill === "Web Development")
      return [
        "Enter Technology",
        "Djamgo",
        "Flask",
        "Php",
        "Other",
      ].map((specifics) => <Picker.Item label={specifics} value={specifics} />);

    if (this.state.skill === "")
      return [" "].map((specifics) => (
        <Picker.Item label={specifics} value={specifics} />
      ));
      return <Picker.Item label="Enter Skills" value="" />;

  };
  submit = () => {
    if (this.state.skill == "") {
      Alert.alert(
        "Submit Error",
        "Please Fill The Form Correctly",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      this.props.addUser({ skill: this.state.skill });
      this.props.addUser({ specifics: this.state.specifics });
      this.props.addUser({ otherSkill: this.state.otherSkill });
      this.props.navigation.navigate("Pic");
    }
  };
  renderOther = () => {
    if (this.state.skill === "other skill") {
      return (
        <View>
          <Text style={styles.skills}>Enter the skill:</Text>
          <TextInput
            maxLength={20}
            onChangeText={(value) => {
              this.setState({ otherSkill: value });
            }}
            style={styles.textInput}
          ></TextInput>
        </View>
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Select The Area Of Your Expertise</Text>
        <Picker
          selectedValue={this.state.skill}
          onValueChange={this.updateSkill}
          placeholder="Select Skills"

          textStyle={{ width:  isAndroidPlastForm() ? screenWidth * 100:0,
            color: "white",
            fontSize:15,
            marginVertical:7,
            paddingVertical:5, }}
          mode="dialog"
        >
          <Picker.Item label="Select Skils: " value="" />
          <Picker.Item label="Photography" value="Photography" />
          <Picker.Item label="Videography" value="Videography" />
          <Picker.Item label="Photoshop" value="Photoshop" />
          <Picker.Item label="Animation" value="Animation" />
          <Picker.Item label="Digital Marketing" value="Digital Marketing" />
          <Picker.Item label="Buisness" value="Buisness" />
          <Picker.Item label="Musical Instrument" value="Musical Instrument" />
          <Picker.Item label="Cooking" value="Cooking" />
          <Picker.Item label="Singing" value="Singing" />
          <Picker.Item label="Drawing" value="Drawing" />
          <Picker.Item label="New Language" value="New Language" />
          <Picker.Item label="Computer Language" value="Computer Language" />
          <Picker.Item label="Cyber Security" value="Cyber Security" />
          <Picker.Item
            label="Artificial Intelligence"
            value="Artificial Intelligence"
          />
          <Picker.Item label="Machine Learning" value="Machine Learning" />
          <Picker.Item label="School Subjects" value="School Subjects" />
          <Picker.Item label="Psychology" value="Psychology" />
          <Picker.Item label=" Web Development" value="Web Development" />
          <Picker.Item label="Mobile Development" value="Mobile Development" />
          <Picker.Item label="Game Development" value="Game Development" />
          <Picker.Item label="Graphic Designing " value="Graphic Designing" />
          <Picker.Item label="Interior Designing " value="Interior Designing" />
          <Picker.Item label="Other" value="other skill" />
        </Picker>
        <Picker
          onValueChange={(itemValue) => this.updateSpecifics(itemValue)}
          selectedValue={this.state.specifics}
          placeholder="Select City"

          textStyle={{ width:  isAndroidPlastForm() ? screenWidth * 100:0,
            color: "white",
            fontSize:15,
            marginVertical:7,
            paddingVertical:5,}}
          mode="dialog"
        >
          {this.getCities()}
        </Picker>
        {this.renderOther()}
        <TouchableOpacity onPress={this.submit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (value) => dispatch(addUser(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Display1);
