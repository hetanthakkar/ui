import { StyleSheet, Dimensions } from "react-native";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;

const styles1 = StyleSheet.create({
  learnButton: {
    width: screenWidth * 45,
    borderRadius: 8,
    backgroundColor: "#e67e22",
    alignSelf: "center",
    marginLeft: screenWidth * 2,
    height: screenHeight * 45,
  },
  learnText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 38,
    textAlignVertical: "center",
    marginTop: screenHeight * 5,
  },
  learnIcon: {
    width: screenWidth * 35,
    height: screenHeight * 20,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: screenHeight * 6,
  },
  teachButton: {
    width: screenWidth * 45,
    alignSelf: "center",

    marginRight: screenWidth * 3,
    borderRadius: 8,
    backgroundColor: "#f1c40f",
    height: screenHeight * 45,
  },
  teachText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 38,
    marginTop: screenHeight * 5,
  },
  teachIcon: {
    width: screenWidth * 35,
    height: screenHeight * 20,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: screenHeight * 6,
  },
  container: {
    flex: 1,
    backgroundColor: "#1C2B56",
  },
  text: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    marginLeft: screenHeight * 3,
    marginTop: screenHeight * 8,
    marginBottom: screenHeight * 10,
    backgroundColor: "#192A56",
  },
});
export default styles1;
