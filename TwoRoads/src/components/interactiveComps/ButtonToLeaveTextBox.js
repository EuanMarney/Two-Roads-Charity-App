import React from 'react';
import{ View, StyleSheet, TouchableOpacity, Text, Keyboard } from 'react-native';

const BLeaveTextBox = () => {

  const dismissedKeyboard = () => {
    Keyboard.dismiss();
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={dismissedKeyboard} style={styles.button}>
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
    backgroundColor: 'black',
    padding: 5,
    alignSelf: 'right',
    borderRadius: 5,
    alignItems: 'center',
    width:50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BLeaveTextBox;
