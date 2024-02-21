import * as SecureStore from 'expo-secure-store'
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import stylesheet from "../Styles/stylesheet";
import Feather from 'react-native-vector-icons/Feather'

const getUsername = async () => {
  try {
    return await SecureStore.getItemAsync('username');
  } catch (e) {
    console.error("error getting user name", e);
  }
};
 
const Header = ({ title, navigation }) => {
  const [username, setUsername] = useState('');
  const currentDate = new Date();
  const options = { weekday: "long", month: "short", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
 
  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  };
 
  useEffect(() => {
    const fetchUsername = async () => {
      const retrievedUsername = await getUsername();
      setUsername(retrievedUsername || 'Guest');
    };
 
    fetchUsername();
  }, []);


return (
    <View style={stylesheet.headerComponentContainer}>
      <View style={stylesheet.headerBlueRectangle}>
        <View style={stylesheet.headerWithIconContainer}>
          <Text style={stylesheet.headerText}>Mind Yourself</Text>
          <TouchableOpacity onPress={handleSettingsPress}>
            <Feather name="settings" style={stylesheet.iconCog} />
          </TouchableOpacity>
        </View>
 
        <View style={stylesheet.headerInlineContainer}>
          <Text style={stylesheet.subHeaderText}>{username}</Text>
          <View style={stylesheet.dateContainer}>
            <Text style={stylesheet.dateText}>{formattedDate}</Text>
          </View>
        </View>
      </View>
      <Text style={stylesheet.headerTitle}>{title}</Text>
    </View>
  );
};
 
export default Header;
 