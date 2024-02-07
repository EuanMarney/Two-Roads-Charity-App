import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import Layout from "../components/Layout";

const NOTIFCATIONS_BUTTON_TEXT = "Notifications Settings";

const SettingsScreen = ({ navigation }) => {
  const handlePress = (screenName) => {
    if (screenName == NOTIFCATIONS_BUTTON_TEXT) {
      navigation.navigate(NOTIFCATIONS_BUTTON_TEXT);
    }
    else {
      console.log(screenName + " is unimplemented");
    }
  };

  // Assigning approximate color codes from the screenshot
  const buttons = [
    { title: "View Personal Information", color: "#FF6B6B" },
    { title: "Change Passcode", color: "#FF6B6B" },
    { title: NOTIFCATIONS_BUTTON_TEXT, color: "#FF6B6B" },
    { title: "Reset Data", color: "#D32F2F" },
  ];

  return (
    <Layout style={styles.layoutStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Settings</Text>
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
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layoutStyle: {
    flex: 1,
    backgroundColor: 'blue',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20, 
  },
  headerText: {
    color: "#000",
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 28, 
    paddingVertical: 20,
  },
  buttonContainer: {
    paddingHorizontal: 22,
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

export default SettingsScreen;