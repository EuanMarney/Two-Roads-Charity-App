// eslint-disable-next-line no-unused-vars
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import stylesheet from "../components/Styles/stylesheet";
import HomeLayout from "../components/Layout/HomeLayout";

const HomeScreen = ({ navigation }) => {
  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  const buttons = [
    { title: "Gratitude Diary", color: "#3892E5" },
    { title: "Acts of Kindness", color: "#AA9CFC" },
    { title: "Hedonic Moments", color: "#DA9CFC" },
    { title: "Acts of Connection", color: "#FABB4A" },
    { title: "Daily Mindfulness", color: "#82ED46" },
    { title: "Calendar", color: "#664AFA" },
  ];

  return (
    <HomeLayout navigation={navigation}>
      <View style={stylesheet.homeView}>
        {/* <View style={stylesheet.headerContainer}>
            <Text style={stylesheet.homeHeader}>Daily Practices</Text>
          </View> */}

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
