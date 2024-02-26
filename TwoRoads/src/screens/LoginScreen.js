import { Feather } from "@expo/vector-icons";
import stylesheet from '../components/Styles/stylesheet';
import * as SecureStore from "expo-secure-store";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";

import LoginHeader from "../components/Header/LoginHeader";

const LoginScreen = ({ navigation }) => {
  const [pinLogin, setPin] = useState("");

  // Developer functions REMOVE before pushing to live

  const logAllData = async () => {
    const keys = ["username", "pin"]; // Replace with your actual keys
    keys.forEach(async (key) => {
      const value = await SecureStore.getItemAsync(key);
      console.log(key, value, "LoginScreen line 22");
    });
  };

  useEffect(() => {
    logAllData();
  }, []);

  // end of developer functions

  const getPin = async () => {
    try {
      return await SecureStore.getItemAsync("pin");
    } catch (e) {
      console.error("Error finding pin", e);
    }
  };

  const getUsername = async () => {
    return await SecureStore.getItemAsync("username");
  };

  const comparePin = async (enteredPin) => {
    try {
      const storedPin = await getPin();
      const username = await getUsername();
      if (enteredPin === storedPin) {
        alert("welcome " + username);
        navigation.navigate("Home");
      } else {
        alert("Pin does not match one in our database");
        setPin(pinLogin.substring(0, pinLogin.length - 6));
      }
    } catch (e) {
      console.error("Error comparing pins", e);
    }
  };

  const handlePress = (num) => {
    if (pinLogin.length < 6) {
      setPin(pinLogin + num);
    }
  };

  const handleDelete = () => {
    setPin(pinLogin.substring(0, pinLogin.length - 1));
  };

  const handleSubmit = () => {
    if (pinLogin.length === 6) {
      comparePin(pinLogin);
    } else {
      alert("Please enter a 6-digit pin");
      setPin(pinLogin.substring(0, pinLogin.length - 6));
    }
  };

  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < 6; i++) {
      circles.push(
        <View
          key={i}
          style={[
            stylesheet.circle,
            { backgroundColor: i < pinLogin.length ? "black" : "transparent" },
          ]}
        />,
      );
    }
    return circles;
  };

  return (
    <View style={stylesheet.loginContainer}>
      <LoginHeader />

      <Text style={stylesheet.titleLogin}>Enter your 6-digit passcode</Text>
      <View style={stylesheet.circleContainer}>{renderCircles()}</View>

      <View style={stylesheet.numbersContainer}>
        {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
          <TouchableOpacity
            key={num}
            style={stylesheet.number}
            onPress={() => handlePress(num.toString())}
          >
            <Text style={stylesheet.numberText}>{num}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={stylesheet.icon} onPress={() => handleDelete()}>
          <Feather name="delete" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          key="0"
          style={[stylesheet.number, { marginLeft: 30 }]}
          onPress={() => handlePress("0")}
        >
          <Text style={stylesheet.numberText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylesheet.buttonLogin} onPress={handleSubmit}>
          <Text style={stylesheet.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
        <Text style={stylesheet.forgotText}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
