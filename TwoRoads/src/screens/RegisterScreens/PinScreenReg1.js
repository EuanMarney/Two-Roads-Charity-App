import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { Svg, Path } from "react-native-svg"; // For custom icons
import { Feather } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
import LoginHeader from "../../components/Header/LoginHeader";

const PinScreenReg1 = ({ navigation }) => {
  const [pin, setPin] = useState("");

  const savePin = async (pin) => {
    await SecureStore.setItemAsync("pin", pin);
    console.log("here");
    console.log(await SecureStore.getItemAsync("pin"));
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

  const storePinV1 = async (pin) => {
    try {
      //await secur.setItem('@username', username)
    } catch {}
  };

  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < 6; i++) {
      circles.push(
        <View
          key={i}
          style={[
            styles.circle,
            { backgroundColor: i < pin.length ? "black" : "transparent" },
          ]}
        />,
      );
    }
    return circles;
  };

  return (
    <View style={styles.container}>
      <LoginHeader />

      <Text style={styles.title}>Enter your 6-digit passnumber</Text>
      <View style={styles.circleContainer}>{renderCircles()}</View>

      <View style={styles.numbersContainer}>
        {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
          <TouchableOpacity
            key={num}
            style={styles.number}
            onPress={() => handlePress(num.toString())}
          >
            <Text style={styles.numberText}>{num}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.icon} onPress={() => handleDelete()}>
          <Feather name="delete" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          key="0"
          style={[styles.number, { marginLeft: 30 }]}
          onPress={() => handlePress("0")}
        >
          <Text style={styles.numberText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => console.log("Implement password recovery")}
      >
        <Text style={styles.forgotText}>I can't log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 18,
    marginBottom: "8%",
    marginTop: "5%",
  },
  circleContainer: {
    flexDirection: "row",
    marginBottom: "5%",
  },
  circle: {
    width: "5%",
    height: 20,
    // Android Border Issue Fix
    ...Platform.select({
      ios: {
        borderRadius: "100%",
      },
      android: {
        borderRadius: 100,
      },
      default: {
        borderRadius: 100,
      },
    }),
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  numbersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: 300,
  },
  number: {
    width: 75,
    height: 75,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
    borderWidth: 1,
    borderColor: "black",
  },
  numberText: {
    fontSize: 24,
  },
  icon: {
    marginLeft: 15,
    width: 60,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  forgotText: {
    marginTop: 20,
    color: "blue",
  },
  submitButtonText: {
    marginTop: 20,
    color: "black",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});

export default PinScreenReg1;
