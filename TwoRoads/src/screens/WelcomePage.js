import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import LoginHeader from "../components/Header/LoginHeader";
import stylesheet from "../components/Styles/stylesheet";
import { removeAllUserData } from "../database/dataRemovalUtil";

const handleDataRemoval = async () => {
  await removeAllUserData();
  console.log("data removed");
};

const WelcomePage = ({ navigation }) => {
  return (
    <View style={stylesheet.container}>
      <LoginHeader />

      <Text style={stylesheet.title}>Welcome to The Two Roads Charity App</Text>
      <View style={stylesheet.textContainer}>
        <Text style={stylesheet.description}>
          Your companion for mental well-being. Track your gratitude, kindness,
          and daily moments of joy. Engage in acts of connection and mindfulness
          with our guided support.
        </Text>
        <Text style={stylesheet.description}>
          To begin, create an account and set up a personal passcode to keep
          your entries secure.
        </Text>
      </View>

      <View>
        <TouchableOpacity
          testID="login-button"
          style={stylesheet.button}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={stylesheet.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          testID="register-button"
          style={[
            stylesheet.button,
            {
              backgroundColor: "white",
              borderColor: "#3498db",
              borderWidth: 2,
            },
          ]} // borderWidth should be a number, not a string
          onPress={() => {
            Alert.alert(
              "Confirm New Account",
              "Creating a new account will remove all previous data stored on this device. Do you want to continue?",
              [
                {
                  text: "No",
                  onPress: () => console.log("User canceled account creation"),
                  style: "cancel",
                },
                {
                  text: "Yes",
                  onPress: () => {
                    navigation.navigate("RegisterScreen");
                    handleDataRemoval(); // remove all data from the device
                  },
                },
              ],
              { cancelable: false },
            );
          }}
        >
          <Text style={[stylesheet.buttonText, { color: "#3498db" }]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomePage;
