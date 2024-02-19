import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import HomeLayout from "../components/Layout/HomeLayout";

const HomeScreen = ({ navigation }) => {
  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  const buttons = [
    { title: "Gratitude Diary", color: "#634AFA" },
    { title: "Acts of Kindness", color: "#4A89FA" },
    { title: "Hedonic Moments", color: "#BB4AFA" },
    { title: "Acts of Connection", color: "#FABB4A" },
    { title: "Daily Mindfulness", color: "#82ED46" },
    { title: "Calendar", color: "#664AFA" },
  ];

  return (
    <HomeLayout navigation={navigation}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Daily Practices</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.customButton, { backgroundColor: button.color }]}
            onPress={() => handlePress(button.title)}
          >
            <Text style={styles.buttonText}>{button.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    marginBottom: -30, // Adjust the marginBottom for padding
  },
  headerText: {
    marginTop: 20,
    color: "#000",
    fontFamily: "Arial",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 30, // Set a numeric value for lineHeight
    paddingBottom: 35,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 22,
    marginTop: 10, // Adjust the marginTop to bring buttons closer to text
  },
  customButton: {
    marginBottom: 20,
    borderRadius: 20,
    paddingVertical: 32,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default HomeScreen;
