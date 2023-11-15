import React, { useRef } from 'react';
import{ View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const BLeaveTextBox = () => {
  const textInputRef = useRef(null);

  const handleExitTextInput = () => {
    if (textInputRef.current) {
      textInputRef.current.blur(); // Blur the TextInput to remove focus
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleExitTextInput} style={styles.button}>
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
