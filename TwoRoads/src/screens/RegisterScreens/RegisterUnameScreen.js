import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from "react-native";
import { StatusBar } from 'react-native';
import * as SecureStore from 'expo-secure-store'

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const saveUsername = async (username) => {
    await SecureStore.setItemAsync('username', username);
  }

  const handlePress = () => {
    console.log(username)
    saveUsername(username)
    navigation.navigate('PinScreenReg1')
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          value={username}
          onChangeText={setUsername}
        />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;