// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import * as SecureStore from "expo-secure-store";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StatusBar,
} from "react-native";
import stylesheet from "../../components/Styles/stylesheet";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");

  // Renamed the parameter to avoid shadowing the `username` state variable
  const saveUsername = async (newUsername) => {
    await SecureStore.setItemAsync("username", newUsername);
  };

  const handlePress = () => {
    saveUsername(username); // No change needed here
    navigation.navigate("PinScreenReg1");
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
};

export default RegisterScreen;
