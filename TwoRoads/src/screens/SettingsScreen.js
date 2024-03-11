// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";

import Layout from "../components/Layout";
import stylesheet from "../components/Styles/stylesheet";
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
    <Layout style={stylesheet.homeView}>
        <View style={[stylesheet.buttonContainer, {justifyContent: "flex-start", paddingTop: "5%"}]}>
          {/* Notifications Settings Button */}
          {/* <TouchableOpacity
            style={[styles.customButton, { backgroundColor: "#FF6B6B" }]}
            onPress={navigateToNotifications}
          >
            <Text style={styles.buttonText}>Notfications Settings</Text>
          </TouchableOpacity> */}

          {/* Reset Data Button */}
          <TouchableOpacity
            style={[stylesheet.customButton, { backgroundColor: "#FF0F0F"}]}
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
            <Text style={[stylesheet.homeButtonText, {color: "white", fontFamily: "NunitoBold"}]}>Reset Data</Text>
          </TouchableOpacity>
        </View>
    </Layout>
  );
};

export default SettingsScreen;
