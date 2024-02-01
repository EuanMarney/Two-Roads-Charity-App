import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Feather from 'react-native-vector-icons/Feather';

const Header = ({ title, navigation }) => {
  const currentDate = new Date();
  const options = { weekday: "long", month: "short", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.blueRectangle}>
        <View style={styles.headerWithIconContainer}>
          <Text style={styles.headerText}>Mind Yourself</Text>
          <TouchableOpacity onPress={handleSettingsPress}>
            <Feather name="settings" style={styles.icon} />
          </TouchableOpacity>
        </View>

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
    height: "15%",
  },
  blueRectangle: {
    backgroundColor: "#0395CC",
    height: "100%",
    justifyContent: "flex-end",
    padding: "3.5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerWithIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 0.5,
  },
  inlineContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  subHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 0.5,
    marginBottom: 0.5,
  },
  dateContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  dateText: {
    fontSize: 12,
    fontWeight: "normal",
    color: "#FFF",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 0,
  },
  icon: {
    fontSize: 25,
    color: "#FFF",
  },
});

export default Header;
