import React from "react";
import { View, Image } from "react-native";
import stylesheet from "../Styles/stylesheet";

const Footer = () => {
  return (
    <View style={stylesheet.footerContainer} testID="footer-container">
          <Image
        source={require('../../assets/twoRoads.png')}
        style={stylesheet.footerImage}
        testID="footer-image"
      />
    </View>
  );
};

export default Footer;
