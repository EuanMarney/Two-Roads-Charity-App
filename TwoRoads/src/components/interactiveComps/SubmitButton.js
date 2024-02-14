import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// SubmitButton.js - Add a buttonStyle prop for custom styles
const SubmitButton = ({ title, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "50%",
    height: 35,
    backgroundColor: '#BB4AFA', // Change this color to match your design
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  
  text: {
    color: '#FFF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 26, // Adjust line height as needed
  },
});

export default SubmitButton;
