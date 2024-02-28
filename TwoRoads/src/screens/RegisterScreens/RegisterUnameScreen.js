import * as SecureStore from 'expo-secure-store'
import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, StatusBar } from "react-native";

import stylesheet from '../../components/Styles/stylesheet';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const saveUsername = async (username) => {
    await SecureStore.setItemAsync('username', username);
  }

  const handlePress = () => {
    saveUsername(username)
    navigation.navigate('PinScreenReg1')
  };

  return (
      <View style={stylesheet.usernameContainer}>
        <Text style={stylesheet.usernameTitle}>Welcome</Text>
        <TextInput
          style={stylesheet.usernameInput}
          placeholder="Enter Username"
          value={username}
          onChangeText={setUsername}
        />
        <TouchableOpacity style={stylesheet.usernameButton} onPress={handlePress}>
          <Text style={stylesheet.usernameButtonText}>Submit</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
  );
}

export default RegisterScreen;