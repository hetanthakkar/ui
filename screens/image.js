import React from "react";
import * as ImagePicker from "expo-image-picker";
import { connect } from "react-redux";
import addUser from "./signup/actions/index";
import styles from "./imgstyle";
import { StyleSheet } from "react-native";
import {
  Image,
  BackHandler,
  ActivityIndicator,
  Clipboard,
  Share,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAfGN94rWhA55dceve-ab5R5nEL6o4xXeg",
  authDomain: "new1-930be.firebaseapp.com",
  databaseURL: "https://new1-930be.firebaseio.com",
  projectId: "new1-930be",
  storageBucket: "new1-930be.appspot.com",
  messagingSenderId: "332990256430",
  appId: "1:332990256430:web:640a6413492c34bf2a96bf",
  measurementId: "G-SBPS6449GM",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
import _ from "lodash";
var idt;
class App extends React.Component {
  async componentDidMount() {
    firebase
      .database()
      .ref("id/number")
      .on("value", (snapshot) => {
        idt = snapshot.val();
        console.log("fetch number is in pic " + idt);
        this.setState({ id: idt });
      });
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    console.log("Pic is" + JSON.stringify(this.props.user.userReducer));
  }
  handleBackButton = () => {
    if (this.props.user.userReducer.skill == "gawar") {
      console.log("entered gawar");
      this.props.navigation.navigate("Demo");
      return true;
    } else this.props.navigation.navigate("Demo1");
    return true;
  };
  handleimage = async () => {
    if (this.state.image == null) {
      if (this.props.user.userReducer.gender == "Female")
        var photo =
          "https://www.kpcw.org/sites/kpcw/files/styles/medium/public/201409/Wonder_Woman_no_photo_2.jpg";
      else
        var photo =
          "https://i.pinimg.com/600x315/60/87/ed/6087ed0551ade6a795b06580293c99eb.jpg";
      await this.setState({ image: photo });
    }

    firebase
      .database()
      .ref("user/" + this.state.id)
      .set({
        name: this.props.user.userReducer.name,
        email: this.props.user.userReducer.email,
        password: this.props.user.userReducer.password,
        state: this.props.user.userReducer.state,
        city: this.props.user.userReducer.city,
        skill: this.props.user.userReducer.skill,
        gender: this.props.user.userReducer.gender,
      });
    if (this.props.user.userReducer.specifics != undefined) {
      firebase
        .database()
        .ref("user/" + this.state.id)
        .update({
          photo: this.state.image,
          specifics: this.props.user.userReducer.specifics,
        });
    }
    if (this.props.user.userReducer.otherSkill != undefined) {
      firebase
        .database()
        .ref("user/" + this.state.id)
        .update({
          photo: this.state.image,
          otherSkill: this.props.user.userReducer.otherSkill,
        });
    }

    firebase
      .database()
      .ref("id")
      .set({
        number: this.state.id + 1,
      });

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, "password")
      .then(() => console.log("success"))
      .catch((error) => console.log(error));
  };
  mainpage = () => {
    if (this.state.image == null) this.handleimage();
  };
  state = {
    image: null,
    uploading: false,
  };

 
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._takePhoto} style={styles.capturePhoto}>
          <Text style={styles.capturePhotoText}>Take a photo</Text>
        </TouchableOpacity>
        <Text style={{ color: "black", fontSize: 19 }}>
          {" "}
          {"\n"}
          {"\n"}OR
        </Text>

        <TouchableOpacity onPress={this._pickImage} style={styles.upload}>
          <Text style={styles.uploadText}>Upload from file</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handleimage} style={styles.uploadLater}>
          <Text style={styles.uploadLaterText}>I will upload later</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.mainpage} style={styles.mainPage}>
          <Text style={styles.mainPageText}>Go to main page</Text>
        </TouchableOpacity>

        {this._maybeRenderImage()}
        {this._maybeRenderUploadingOverlay()}

        <StatusBar barStyle="default" />
      </View>
    );
  }

  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <ActivityIndicator color="#fff" animating size="small" />
        </View>
      );
    }
  };

  _maybeRenderImage = () => {
    let { image } = this.state;
    if (!image) {
      return;
    }
    return (
      <View style={styles.view}>
        <View style={styles.viewIos}>
          <Image
            backgroundColor="#6bd1e9"
            source={{ uri: image }}
            style={styles.image}
          />
        </View>
      </View>
    );
  };

  _share = () => {
    Share.share({
      message: this.state.image,
      title: "Check out this photo",
      url: this.state.image,
    });
  };

  _copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert("Copied image URL to clipboard");
  };

  _takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    await this._handleImagePicked(pickerResult);
    await this._handleImagePicked(pickerResult);
  };

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    await this._handleImagePicked(pickerResult);
    firebase
      .database()
      .ref("user/" + id)
      .set({
        photo: this.state.image,
      });
  };

  _handleImagePicked = async (pickerResult) => {
    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        uploadUrl = await uploadImageAsync(pickerResult.uri);
        this.setState({ image: uploadUrl });
      }
    } catch (e) {
      console.log(e);
      alert("Upload failed, sorry :(");
    } finally {
      this.setState({ uploading: false });
    }
  };
}

async function uploadImageAsync(uri) {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const ref = firebase.storage().ref().child("ksjdnf");
  const snapshot = await ref.put(blob);
  blob.close();
  return await snapshot.ref.getDownloadURL();
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
