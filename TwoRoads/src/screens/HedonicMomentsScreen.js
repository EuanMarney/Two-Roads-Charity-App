import React from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView, Keyboard, Platform, ScrollView, Touch } from "react-native";
import Layout from "../components/Layout";
import SubmitButton from "../components/interactiveComps/SubmitButton";
import TextBox from "../components/interactiveComps/TextBox";
import BLeaveTextBox from "../components/interactiveComps/ButtonToLeaveTextBox";

const HedonicMomentsScreen = () => {
  return (
    <KeyboardAvoidingView 
      style={styles.textBoxContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <Layout>
        <ScrollView>
          <Text style={styles.headerText}>This is the Hedonic Moments page</Text>
          {/* Adding TextBox component and BLeaveTextBox */}
          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>First Hedonic moment</Text>
              <TextBox />
            </View>
            <View style={styles.buttonContainer}>
              <BLeaveTextBox />
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>Second Hedonic moment</Text>
              <TextBox />
            </View>
            <View style={styles.buttonContainer}>
              <BLeaveTextBox />
            </View>
          </View>
          
          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>Third Hedonic moment</Text>
              <TextBox />
            </View>
            <View style={styles.buttonContainer}>
              <BLeaveTextBox />
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>Fourth Hedonic moment</Text>
              <TextBox />
            </View>
            <View style={styles.buttonContainer}>
              <BLeaveTextBox />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <SubmitButton onPress={() => console.log("Button pressed")} title="Submit" />
          </View>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  paddedText: {
    paddingLeft: 20,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 5,
  },
  rowContainer: {
    flexDirection: "row", // Arrange components horizontally
    justifyContent: "space-between", // Distribute space between components
    alignItems: "center", // Align items vertically
    marginBottom: 10, // Adjust margin bottom as needed
  },
  textBoxContainer: {
    flex: 1, // Take remaining space in the row
  },
  buttonContainer: {
    marginLeft: 10, // Adjust margin as needed
  },
});

export default HedonicMomentsScreen;
