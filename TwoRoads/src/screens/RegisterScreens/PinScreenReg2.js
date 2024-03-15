import { Feather } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store'
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import LoginHeader from '../../components/Header/LoginHeader';
import stylesheet from "../../components/Styles/stylesheet";

const PinScreenReg2 = ({ navigation }) => {
  const [pinv2, setPin] = useState("");

  const getPin = async () => {
    try {
      return await SecureStore.getItemAsync("pin");
    } catch (e) {
      console.error("Error finding pin", e);
    }
  };

  const comparePin = async (enteredPin) => {
    try {
      const storedPin = await getPin();
      if (enteredPin === storedPin) {
        navigation.navigate("Home");
        alert("Account Created");
      } else {
        alert("those pins did not match");
        clearPin();
      }
    } catch (e) {
      console.error("Error comparing pins", e);
    }
  };

  const handlePress = (num) => {
    if (pinv2.length < 6) {
      setPin(pinv2 + num);
    }
  };

  const handleDelete = () => {
    setPin(pinv2.substring(0, pinv2.length - 1));
  };

  const clearPin = () => {
    setPin(pinv2.substring(0, pinv2.length - 6));
  };

  const handleSubmit = () => {
    if (pinv2.length === 6) {
      comparePin(pinv2);
    } else {
      alert("Please enter a 6-digit pin");
      setPin(pinv2.substring(0, pinv2.length - 6));
    }
  };

  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < 6; i++) {
      circles.push(
        <View
        testID='circle'
          key={i}
          style={[
            stylesheet.circle,
            { backgroundColor: i < pinv2.length ? "black" : "transparent" },
          ]}
        />,
      );
    }
    return circles;
  };

  return (
    <View style={stylesheet.loginContainer}>
      <LoginHeader />

      <Text style={stylesheet.titleLogin}>
        Enter your 6-digit passcode again
      </Text>
      <View style={stylesheet.circleContainer}>{renderCircles()}</View>
      <View style={stylesheet.numbersContainer}>
        {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
          <TouchableOpacity
          testID='number'
            key={num}
            style={stylesheet.number}
            onPress={() => handlePress(num.toString())}
          >
            <Text style={stylesheet.numberText}>{num}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={stylesheet.icon}
          onPress={() => handleDelete()}
        >
          <Feather name="delete" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          key="0"
          style={[stylesheet.number, { marginLeft: 30 }]}
          onPress={() => handlePress("0")}
          testID='number'
        >
          <Text style={stylesheet.numberText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesheet.buttonLogin} onPress={handleSubmit}>
          <Text style={stylesheet.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => console.log("Implement password recovery")}
      >
        <Text style={stylesheet.forgotText}>I can&apos;t log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PinScreenReg2;
