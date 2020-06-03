import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

export class Button extends Component {
  render() {
    const { style, textStyle, onPress, text } = this.props;
    return (
      <View>
        <TouchableOpacity
          style={[styles.container, style]}
          onPress={onPress && onPress}
        >
          <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
