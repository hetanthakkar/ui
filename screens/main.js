import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get("window").width) / 100;
const screenHeight = Math.round(Dimensions.get("window").height) / 100;
var students = ["hetan", "thakkar", "sarthak", "vraj", "kavin"];
import { isAndroidPlastForm } from "../helper/index"
export default class App extends React.Component {
  componentDidMount() {
    console.log(
      "main" +
        this.props.navigation.getParam("id") +
        this.props.navigation.getParam("password") +
        this.props.navigation.getParam("city") +
        this.props.navigation.getParam("name") +
        this.props.navigation.getParam("email") +
        this.props.navigation.getParam("state") +
        this.props.navigation.getParam("gender")
    );
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={{
            height: screenHeight * 14,
            borderRadius: 100,
            width: screenWidth * 27,
            marginTop: screenHeight * 5,
            alignSelf: "center",
          }}
          source={{
            uri:
              "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            paddingTop: screenHeight,
            alignSelf: "center",
          }}
        >
          Hetan Thakkar
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 16,
            paddingTop: screenHeight,
          }}
        >
          An Unsure Programmer
        </Text>
        <TouchableOpacity
          onPress={() => console.log("hi")}
          style={{
            width: screenWidth * 95,
            borderRadius: 6,
            backgroundColor: "white",
            height: screenHeight * 4,
            marginTop: screenHeight * 2,
            marginLeft: screenHeight,
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 21,
              textAlign: "center",
            }}
          >
            Edit Profile
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "black",
            fontSize: 21,
            textAlign: "center",
            fontFamily: isAndroidPlastForm() ? sans-serif-light:"Al Nile",
            marginTop: screenHeight * 2,
          }}
        >
          Location : Bhavnagar,Gujarat
        </Text>
        <View>
          <TouchableOpacity>
            <Text
              style={{
                marginTop: screenHeight * 4,
                fontSize: 20,
                marginBottom: screenHeight * 2,
                marginLeft: screenWidth,
              }}
            >
              Students Taught
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {students.map((value) => (
              <TouchableOpacity>
                <Text style={{ fontFamily: isAndroidPlastForm() ? sans-serif-medium:"Al Nile"}}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity>
            <Text
              style={{
                marginTop: screenHeight * 4,
                fontSize: 20,
                marginBottom: screenHeight * 2,
                marginLeft: screenWidth,
              }}
            >
              Your Tutors:
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {students.map((value) => (
              <TouchableOpacity>
                <Text style={{ fontFamily: isAndroidPlastForm() ? sans-serif-medium:"Al Nile"}}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={{
              marginTop: screenHeight * 2,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginTop: screenHeight * 2,
                fontFamily: isAndroidPlastForm() ? sans-serif:"Al Nile",
              }}
            >
              Current Balance : 500
            </Text>
            <Text
              style={{
                fontSize: 20,
                marginTop: screenHeight * 4,
                fontFamily: isAndroidPlastForm() ? sans-serif:"Al Nile"
              }}
            >
              Amount Withdrawn : 200
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignSelf: "center",
            marginTop: screenHeight * 4,
            marginBottom: screenHeight * 4,
          }}
        >
          <Text style={{ fontSize: 25 }}>My Transactions</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#DAE0E2",
    textAlign: "center",
  },
});