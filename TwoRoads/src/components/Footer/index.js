import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
          <Image
        source={require('../../assets/twoRoads.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    height: 60,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#EAEAEA",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Footer;
