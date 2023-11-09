import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>TwoRoadsCharity</Text>
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
});

export default Footer;
