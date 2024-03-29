import { Feather } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import LoginHeader from "../../components/Header/LoginHeader";
import stylesheet from "../../components/Styles/stylesheet";

const PinScreenReg1 = ({ navigation }) => {
  const [pin, setPin] = useState("");

  const savePin = async (newPin) => {
    await SecureStore.setItemAsync("pin", newPin);
  };

  const handlePress = (num) => {
    if (pin.length < 6) {
      setPin(pin + num);
    }
  };

  const handleDelete = () => {
    setPin(pin.substring(0, pin.length - 1));
  };

  const handleSubmit = () => {
    if (pin.length === 6) {
      savePin(pin);
      navigation.navigate("PinScreenReg2");
    } else {
      alert("Please enter a 6-digit pin");
    }
  };

  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < 6; i++) {
      circles.push(
        <View
        testID="circle"
          key={i}
          style={[
            stylesheet.circle,
            { backgroundColor: i < pin.length ? "black" : "transparent" },
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
            testID="number" 
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
          testID="number"
          style={[stylesheet.number, { marginLeft: 30 }]}
          onPress={() => handlePress("0")}
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

export default PinScreenReg1;
