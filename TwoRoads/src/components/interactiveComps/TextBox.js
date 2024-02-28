// eslint-disable-next-line no-unused-vars
import React from "react";
import { View, TextInput } from "react-native";

import stylesheet from "../Styles/stylesheet";

// TextBox.js - Add a style prop for custom styles
const TextBox = ({ onChangeText, value, placeholder, textInputStyle }) => {
  return (
    <View style={stylesheet.textBoxContainer}>
      <TextInput
        style={[stylesheet.textBoxInput, textInputStyle]} // Merge default style with custom style
        onChangeText={onChangeText}
        multiline
        value={value}
        placeholder={placeholder || "Type here..."}
        textAlign="center"
      />
    </View>
  );
};

export default TextBox;
