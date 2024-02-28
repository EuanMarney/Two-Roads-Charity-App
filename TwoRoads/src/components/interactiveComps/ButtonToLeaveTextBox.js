// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";


const BLeaveTextBox = ({ leaveTextBox }) => {
  const handlePress = () => {
    Keyboard.dismiss();
    if (leaveTextBox) leaveTextBox(); // leaveTextBox is a function passed as a prop
  };

  return (
    <View style={styles.container} testID="button-leave-textbox">
      <TouchableOpacity onPress={handlePress} style={styles.button} testID="dismiss-keyboard-button">
        <Text style={styles.buttonText}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    backgroundColor: "black",
    padding: 5,
    alignSelf: "right",
    borderRadius: 5,
    alignItems: "center",
    width: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default BLeaveTextBox;
