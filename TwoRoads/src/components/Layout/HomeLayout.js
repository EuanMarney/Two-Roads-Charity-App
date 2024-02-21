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
      {/* <ScrollView style={stylesheet.homeLayoutScrollStyle}> */}
      <View style={stylesheet.content}>{children}</View>
      {/* </ScrollView> */}
      <Footer />
    </View>
  );
};

export default HomeLayout;
