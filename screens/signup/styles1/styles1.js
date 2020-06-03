import { StyleSheet, Dimensions } from "react-native";
import { isAndroidPlastForm } from "../../../helper";

var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;

const styles1 = StyleSheet.create({
  pickerText: {
    width:  isAndroidPlastForm() ? screenWidth * 100:0,
    color: "white",
    fontSize:15,
    marginVertical:7,
    paddingVertical:5,

  },
  sign: {
    marginTop: screenHeight * 15,
  },
  signup: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    width: screenWidth * 100,
    margin: screenHeight * 5,
    textAlign: "center",
    top: screenHeight * 2,
  },
  errorText: {
    color: "yellow",
    textAlign: "center",
    paddingTop: screenHeight,
  },
  customButton: {
    top: screenHeight * -11,
    alignSelf: "center",
    backgroundColor: "#1287A5",
    borderRadius: 20,
    width: screenWidth * 40,
    height: screenHeight * 6,
  },
  textStyle: {
    color: "#EAF0F1",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    textAlignVertical: "center",
  },
  field: {
    color: "white",
    marginTop: screenHeight * 2,
    marginLeft: screenWidth * 2,
    padding: 10,
    width: "95%",
    borderColor: "white",
    borderRadius: 12,
    borderWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignSelf: "flex-start",
    marginLeft: screenWidth * 2,
    marginTop: screenHeight * 8,
    top: screenHeight * -5,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003f5c",
  },
  myText: {
    color: "white",
    borderWidth: 1.2,
    borderColor: "#d6d0cf",
    margin: 10,
    padding: 10,
    width: "95%",
    borderRadius: 12,
  },
});
export default styles1;
