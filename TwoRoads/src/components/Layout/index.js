import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Footer from "../Footer";

const Layout = ({ children }) => {
  return (

      <View style={styles.container}>
          <ScrollView style={styles.scrollStyle}>
          <View style={styles.content}>{children}</View>
          </ScrollView>
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
