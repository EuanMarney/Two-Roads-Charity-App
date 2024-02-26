import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Footer from "../Footer";

const Layout = ({ children }) => {
  return (

      <View style={styles.container}>
        <View style={styles.content}>{children}</View>
        <Footer />
      </View>

  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  content: {
    flex: 1,
  },
});

export default Layout;
