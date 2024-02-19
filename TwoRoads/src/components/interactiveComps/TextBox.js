import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

// TextBox.js - Add a style prop for custom styles
const TextBox = ({ onChangeText, value, placeholder, textInputStyle }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textInput, textInputStyle]} // Merge default style with custom style
        onChangeText={onChangeText}
        multiline
        value={value}
        placeholder={placeholder || "Type here..."}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#BB4AFA",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    minHeight: 60,
  },
});

export default TextBox;
