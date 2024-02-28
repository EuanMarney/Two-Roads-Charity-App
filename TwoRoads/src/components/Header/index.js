import * as SecureStore from 'expo-secure-store'
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

import stylesheet from "../Styles/stylesheet";

const getUsername = async () => {
  try {
    return await SecureStore.getItemAsync("username");
  } catch (e) {
    console.error("error getting user name", e);
  }
};

const Header = ({ title, navigation }) => {
  const [username, setUsername] = useState("");
  const currentDate = new Date();
  const options = { weekday: "long", month: "short", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const handleSettingsPress = () => {
    navigation.navigate("Settings");
  };

  useEffect(() => {
    const fetchUsername = async () => {
      const retrievedUsername = await getUsername();
      setUsername(retrievedUsername || "Guest");
    };

    fetchUsername();
  }, []);

  return (
    <View style={stylesheet.headerComponentContainer}>
      <View style={stylesheet.headerRectangle}>
        <View style={stylesheet.headerWithIconContainer}>
          <Text style={stylesheet.headerText} testID='header-component'>Daily Practices</Text>
          <TouchableOpacity onPress={handleSettingsPress} testID='settings-button'>
            <Feather name="settings" style={stylesheet.iconCog} />
          </TouchableOpacity>
        </View>

        <View style={stylesheet.headerInlineContainer}>
          <Text style={stylesheet.subHeaderText} testID='username-display'>{username}</Text>
          <View style={stylesheet.dateContainer}>
            <Text style={stylesheet.dateText} testID='date'>{formattedDate}</Text>
          </View>
        </View>
      </View>
      <Text style={stylesheet.headerTitle}testID='header-title'>{title}</Text>
    </View>
  );
};

export default Header;
