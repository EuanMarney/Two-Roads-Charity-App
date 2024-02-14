import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, StatusBar } from "react-native";

import Header from "../Header";
import Footer from "../Footer";

const HomeLayout = ({ children, navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
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

export default HomeLayout;
