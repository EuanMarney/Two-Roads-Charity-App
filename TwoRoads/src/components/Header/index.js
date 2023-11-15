import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
  const currentDate = new Date();
  const options = { weekday: "long", month: "short", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.blueRectangle}>
        <Text style={styles.headerText}>Mind Yourself</Text>
        <View style={styles.inlineContainer}>
          <Text style={styles.subHeaderText}>NAME</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{formattedDate}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    height: 90, // Increased height for headerContainer
  },
  blueRectangle: {
    backgroundColor: "#0395CC",
    height: 90, // Increased height for blueRectangle
    justifyContent: "flex-end", // Align content to the end (bottom)
    padding: 10, // Add padding for better spacing
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF", // Set text color to white
    marginBottom: 0.5, // Adjusted bottom margin for "Mind Yourself"
  },
  inlineContainer: {
    flexDirection: "row",
    alignItems: "flex-end", // Align the items to the bottom of the container
  },
  subHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF", // Set text color to white
    marginTop: 0.5, // Further reduced margin between "Mind Yourself" and "NAME"
    marginBottom: 0.5, // Adjusted bottom margin for "NAME"
  },
  dateContainer: {
    flex: 1, // Take up the remaining space to push the date to the right
    alignItems: "flex-end", // Align the date to the right
  },
  dateText: {
    fontSize: 12,
    fontWeight: "normal",
    color: "#FFF", // Set text color to white
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 0,
  },
});

export default Header;
