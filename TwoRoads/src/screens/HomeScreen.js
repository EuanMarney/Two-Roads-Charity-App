// eslint-disable-next-line no-unused-vars
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import HomeLayout from "../components/Layout/HomeLayout";
import stylesheet from "../components/Styles/stylesheet";


const HomeScreen = ({ navigation }) => {
  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  const buttons = [
    { title: "Gratitude Diary", color: "#3892E5" },
    { title: "Acts of Kindness", color: "#AA9CFC" },
    { title: "Hedonic Moments", color: "#DA9CFC" },
    { title: "Acts of Connection", color: "#70FFC8" },
    { title: "Daily Mindfulness", color: "#FB0EC0" },
    // { title: "Calendar", color: "#664AFA" },
  ];

  return (
    <HomeLayout navigation={navigation}>
      <View style={stylesheet.homeView} testID="home-screen">

        <View style={stylesheet.buttonContainer}>
          {buttons.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={[
                stylesheet.customButton,
                { backgroundColor: button.color },
              ]}
              onPress={() => handlePress(button.title)}
            >
              <Text style={stylesheet.homeButtonText}>{button.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </HomeLayout>
  );
};

export default HomeScreen;
