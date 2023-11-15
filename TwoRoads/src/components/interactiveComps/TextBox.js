import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextBox = () => {
  const [text, setText] = useState('');
  const textInputRef = useRef(null);

  const clearText = () => {
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={textInputRef}
        style={styles.textInput}
        onChangeText={setText}
        multiline={true}
        value={text}
        placeholder="Type here..."
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
    borderColor: '#BB4AFA',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    minHeight: 60, // Fix typo: should be minHeight instead of minheight
  },
});

export default TextBox;
