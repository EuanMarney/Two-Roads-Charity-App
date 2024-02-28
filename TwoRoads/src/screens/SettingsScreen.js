// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

import Layout from "../components/Layout";
import { removeAllUserData } from "../database/dataRemovalUtil";

const SettingsScreen = ({ navigation }) => {
  const navigateToNotifications = () => {
    navigation.navigate("NotificationsSettingsScreen");
  };

  const navigateToWelcome = () => {
    navigation.navigate("WelcomePage");
  };

  const handleDataRemoval = async () => {
    await removeAllUserData();
    console.log("removing all user data, SettingsScreen line 18");
  };

  return (
    <Layout style={styles.layoutStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Settings</Text>
        </View>
        <View style={styles.buttonContainer}>
          {/* Notifications Settings Button */}
          <TouchableOpacity
            style={[styles.customButton, { backgroundColor: "#FF6B6B" }]}
            onPress={navigateToNotifications}
          >
            <Text style={styles.buttonText}>Notfications Settings</Text>
          </TouchableOpacity>

          {/* Reset Data Button */}
          <TouchableOpacity
            style={[styles.customButton, { backgroundColor: "#D32F2F" }]}
            onPress={() => {
              Alert.alert(
                "Remove all Data?",
                "Remove all data stored on this device and return to the welcome screen. Do you want to continue?",
                [
                  {
                    text: "No",
                    onPress: () =>
                      console.log("User canceled account creation"),
                    style: "cancel",
                  },
                  {
                    text: "Yes",
                    onPress: () => {
                      navigateToWelcome();
                      handleDataRemoval();
                    },
                  },
                ],
                { cancelable: false },
              );
            }}
          >
            <Text style={styles.buttonText}>Reset Data</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layoutStyle: {
    flex: 1,
    backgroundColor: "blue",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
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
