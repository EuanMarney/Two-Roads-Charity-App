// eslint-disable-next-line no-unused-vars
import React from "react";
import { View, ImageBackground, ScrollView } from "react-native";


import backgroundImg from "../../assets/background.png";
import Footer from "../Footer";
import Header from "../Header";
import stylesheet from "../Styles/stylesheet";

const HomeLayout = ({ children, navigation }) => {
  return (
    <View style={stylesheet.homeLayoutContainer}>
      <Header navigation={navigation} testID='header' />
      <ScrollView style={stylesheet.homeLayoutScrollStyle} testID="homeLayoutScrollView">
        <View style={stylesheet.content}>{children}</View>
      </ScrollView>
      <ImageBackground
        source={backgroundImg}
        style={stylesheet.backgroundImage}
        testID="backgroundImage"
      />
      <Footer testID='footer'/>
    </View>
  );
};

export default HomeLayout;
