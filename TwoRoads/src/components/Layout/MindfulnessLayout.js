// eslint-disable-next-line no-unused-vars
import React from "react";
import { View, StyleSheet } from "react-native";

const DailyLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  content: {
    flex: 1,
  },
});

export default DailyLayout;
