import React from "react";
import { Text, View, TextInput, Alert } from "react-native";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import RadioForm from "react-native-simple-radio-button";

import { Button } from "../../../components/button/index";
import addUser from "../actions/index";
import styles from "../styles1/styles1";
import { Picker } from "react-native-picker-dropdown";

var radio_props = [
  { label: "Male    ", value: "Male" },
  { label: "Female", value: "Female" },
];
var name = [];
var email = [];

var letters = /^[A-Za-z]+$/;
var mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const validate = (values) => {
  var errors = {};
  if (!letters.test(values.name)) {
    errors.name = "Please fill the proper name";
  }
  if (!values.name) {
    errors.name = "This name field cant be empty";
  }
  if (!mail.test(values.email)) {
    errors.email = "Enter valid email address";
  }
  if (!values.email) {
    errors.email = "This field cant be empty";
  }
  if (!values.password) {
    errors.password = "Enter the Password";
  }
  if (values.password != undefined && values.password.length < 5) {
    errors.password = "Password should atleast have 5 characters";
  }
  if (!values.cpassword) {
    errors.password = "Re-Enter the Password";
  }
  if (values.password !== values.cpassword) {
    errors.cpassword = "Password does not match";
  }
  return errors;
};
const myFields = ({
  label,
  meta: { error, touched },
  input: { onChange, ...restInput },
}) => {
  return (
    <View style={{ backgroundColor: "#003f5c" }}>
      <TextInput
        onChangeText={onChange}
        {...restInput}
        placeholder={label}
        style={styles.field}
      />
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

class myFormCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  getcityes = () => {
    if (this.state.state == "Gujarat")
      return [
        "Enter City",
        "Ahmedabad",
        "Anand",
        "Bhavnagar",
        "Gandhinagar",
        "Jamnagar",
        "Rajkot",
        "Surat",
        "Vadodara",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Maharashtra")
      return [
        "Enter City",
        "Akola",
        "Kalyan",
        "Mumbai",
        "Navi Mumbai",
        "Panvel",
        "Pune",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Chhattisgarh")
      return [
        "Enter City",
        "Raipur",
        "Bilaspur",
        "Bastar",
        "Jashpur",
        "Durg",
        "Koriya",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state === "Jharkhand")
      return [
        "Enter City",
        "Ranchi",
        "Bokaro",
        "Deoghar",
        "Dhanbad",
        "Dumka",
        "Ghatshila",
        "Hazaribagh",
        "Jamshedpur",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Kerala")
      return ["Enter City", "Kochi"].map((city) => (
        <Picker.Item label={city} value={city} />
      ));
    if (this.state.state == "Madhya Pradesh")
      return [
        "Enter City",
        "Bhopal",
        "Indore",
        "Gwalior",
        "Jabalpur",
        "Sagar",
        "Ujjain ",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Karnataka")
      return [
        "Enter City",
        "Mangalore",
        "Bangalore",
        "Mysore",
        "Bijapur",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Rajasthan")
      return [
        "Enter City",
        "Kota",
        "Udaipur",
        "Jaipur",
        "Jodhpur",
        "Sikar",
        "Ajmer",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Tamil Nadu")
      return [
        "Enter City",
        "Coimbatore",
        "Salem",
        "Madurai",
        "Tiruchirapalli",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Uttar Pradesh")
      return [
        "Enter City",
        "Kanpur",
        "Lucknow",
        "Ghaziabad",
        "Agra",
        "Varanasi",
        "Prayagraj",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Delhi")
      return ["Enter City", "Delhi NCR"].map((city) => (
        <Picker.Item label={city} value={city} />
      ));
    if (this.state.state == "")
      return <Picker.Item label="Enter City" value="" />;
  };

  updatecity = (value) => {
    this.setState({ city: value });
  };
  handleValueChange = (value) => {
    this.setState({ state: value });
  };

  submit = (values) => {
    if (name.indexOf(values.name) !== -1) {
      Alert.alert(
        "Username Error",
        "Username Already exists",
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
    } else if (email.indexOf(values.email) !== -1) {
      Alert.alert(
        "Email Error",
        "Email Already exists",
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
    } else if (this.state.gender == "") {
      Alert.alert(
        "Submit Error",
        "Select Gender",
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
    } else if (this.state.state == "") {
      Alert.alert(
        "Submit Error",
        "Select State",
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
    } else if (this.state.city == "") {
      Alert.alert(
        "Submit Error",
        "Select City",
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
      this.props.addUser({ name: values.name });
      this.props.addUser({ city: this.state.city });
      this.props.addUser({ email: values.email });
      this.props.addUser({ state: this.state.state });
      this.props.addUser({ gender: this.state.gender });
      this.props.addUser({ password: values.cpassword });

      this.props.navigation.navigate("Demo");
    }
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.signup}>Sign Up To Get Started</Text>
        </View>
        <View>
          <Field name="name" component={myFields} label="Name " />
          <Field name="email" component={myFields} label="Email ID" />
          <Field name="password" component={myFields} label="Password" />
          <Field
            name="cpassword"
            component={myFields}
            label="Re-enter Password"
          />
          <Text></Text>
          <Picker
            selectedValue={this.state.state}
            onValueChange={this.handleValueChange}
            mode="dialog"
            textStyle={styles.pickerText}
          >
            <Picker.Item label="Enter State" value="" />
            <Picker.Item label="Delhi" value="Delhi" />
            <Picker.Item label="Chhattisgarh" value="Chhattisgarh" />
            <Picker.Item label="Goa" value="Goa" />
            <Picker.Item label="Gujarat" value="Gujarat" />
            <Picker.Item label="Haryana" value="Haryana" />
            <Picker.Item label="Jharkhand" value="Jharkhand" />
            <Picker.Item label="Karnataka" value="Karnataka" />
            <Picker.Item label="Kerala" value="Kerala" />
            <Picker.Item label="Madhya Pradesh" value="Madhya Pradesh" />
            <Picker.Item label="Maharashtra" value="Maharashtra" />
            <Picker.Item label="Punjab" value="Punjab" />
            <Picker.Item label="Rajasthan" value="Rajasthan" />
            <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
            <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
          </Picker>

          <Picker
            onValueChange={(itemValue) => this.updatecity(itemValue)}
            selectedValue={this.state.city}
            mode="dialog"
            textStyle={styles.pickerText}
          >
            {this.getcityes()}
          </Picker>
          <RadioForm
            style={styles.button}
            buttonSize={15}
            formHorizontal={true}
            labelHorizontal={true}
            radio_props={radio_props}
            labelStyle={{ fontSize: 20, color: "white" }}
            initial={-1}
            onPress={(value) => {
              this.setState({ gender: value });
            }}
          ></RadioForm>
          <Text style={styles.sign}>{this.state.city}</Text>
          <Button
            style={styles.customButton}
            onPress={this.props.handleSubmit(this.submit)}
            text="SignUp"
            textStyle={styles.textStyle}
          ></Button>
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
const ourform = reduxForm({
  form: "something",
  destroyOnUnmount: false,
  validate,
})(myFormCom);

export default connect(mapStateToProps, mapDispatchToProps)(ourform);
