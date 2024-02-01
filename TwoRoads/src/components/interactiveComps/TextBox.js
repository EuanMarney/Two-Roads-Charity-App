import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const TextBox = ({ onChangeText, value, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        multiline={true}
        value={value}
        placeholder={placeholder || "Type here..."}
        // You can adjust other TextInput props as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#BB4AFA",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    minHeight: 60,
  },
});

export default TextBox;
