// eslint-disable-next-line no-unused-vars
import React from "react";
import { View, ImageBackground, ScrollView } from "react-native";
import stylesheet from "../Styles/stylesheet";

import backgroundImg from "../../assets/background.png";

import Footer from "../Footer";
import Header from "../Header";

const HomeLayout = ({ children, navigation }) => {
  return (
    <View style={stylesheet.homeLayoutContainer}>
      <Header navigation={navigation} />
      <ScrollView style={stylesheet.homeLayoutScrollStyle}>
        <View style={stylesheet.content}>{children}</View>
      </ScrollView>
      <ImageBackground
        source={backgroundImg}
        style={stylesheet.backgroundImage}
      />
      <Footer />
    </View>
  );
};

export default HomeLayout;
