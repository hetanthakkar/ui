import React, { Component } from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";

export class TexttInput extends Component {
  render() {
    const { style, placeholder, onChangeText, onSubmitEditing } = this.props;
    return (
      <View>
        <TextInput
          onChangeText={onChangeText && onChangeText}
          onSubmitEditing={onSubmitEditing && onSubmitEditing}
          style={[style && styles.container]}
          placeholder={placeholder}
        ></TextInput>
      </View>
    );
  }
}
