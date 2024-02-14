import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Layout from "../../components/Layout";
import SubmitButton from "../../components/interactiveComps/SubmitButton";
import TextBox from "../../components/interactiveComps/TextBox";
import { connectToDatabase } from "../../database/db";
import {
  insertHedonicMoment,
  getAllHedonicMoments,
} from "../../database/hedonicMoments";
import { useNavigation } from "@react-navigation/native";

const HedonicMomentsScreen = () => {
  const [firstMoment, setFirstMoment] = useState("");
  const [secondMoment, setSecondMoment] = useState("");
  const [thirdMoment, setThirdMoment] = useState("");
  const [fourthMoment, setFourthMoment] = useState("");

  const navigation = useNavigation();

  // Handle Submit
  const handleSubmit = async () => {
    try {
      const db = await connectToDatabase();

// Get today's date in YYYY-MM-DD format with leading zeros for month and day
const today = new Date();
const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;


      await insertHedonicMoment(
        db,
        formattedDate,
        firstMoment,
        secondMoment,
        thirdMoment,
        fourthMoment,
      );
      console.log("Hedonic moments added successfully.");

      // Reset the text fields
      setFirstMoment("");
      setSecondMoment("");
      setThirdMoment("");
      setFourthMoment("");

      // Navigate back to the HomeScreen
      navigation.navigate("Home");

      getAllHedonicMoments(
        db,
        (moments) => {
          console.log("Retrieved hedonic moments:", moments);
          // Process or display the retrieved moments as needed
        },
        (error) => {
          console.error("Error retrieving hedonic moments: ", error);
        },
      );
    } catch (error) {
      console.error("Error adding hedonic moments: ", error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.textBoxContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <Layout>
        <ScrollView>
          <Text style={styles.headerText}>
            This is the Hedonic Moments page
          </Text>
          {/* Adding TextBox component and BLeaveTextBox */}
          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>First Hedonic moment</Text>
              <TextBox
                onChangeText={(text) => setFirstMoment(text)}
                value={firstMoment}
                placeholder="Describe the first moment..."
              />
            </View>
            {/* <View style={styles.buttonContainer}>
              <BLeaveTextBox />
            </View> */}
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>Second Hedonic moment</Text>
              <TextBox
                onChangeText={(text) => setSecondMoment(text)}
                value={secondMoment}
                placeholder="Describe the second moment..."
              />
            </View>
            {/* <View style={styles.buttonContainer}>
              <BLeaveTextBox />
            </View> */}
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>Third Hedonic moment</Text>
              <TextBox
                onChangeText={(text) => setThirdMoment(text)}
                value={thirdMoment}
                placeholder="Describe the third moment..."
              />
            </View>
            {/* <View style={styles.buttonContainer}>
              <BLeaveTextBox />
            </View> */}
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>Fourth Hedonic moment</Text>
              <TextBox
                onChangeText={(text) => setFourthMoment(text)}
                value={fourthMoment}
                placeholder="Describe the fourth moment..."
              />
            </View>
            {/* <View style={styles.buttonContainer}>
              <BLeaveTextBox />
            </View> */}
          </View>

          <View style={styles.buttonContainer}>
            <SubmitButton onPress={handleSubmit} title="Submit" />
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
    paddingLeft: "3%",
    paddingTop: "5%",
    paddingBottom: "5%"
  },
  paddedText: {
    paddingLeft: "3%",
    paddingTop: "2%",
    paddingBottom: "1%",
    color: '#BB4AFA',
    fontWeight: "bold",
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
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: "5%",
  },
});

export default HedonicMomentsScreen;
