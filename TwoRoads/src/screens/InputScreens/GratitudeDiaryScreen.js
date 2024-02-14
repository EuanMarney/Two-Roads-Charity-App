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
import TextBox from "../../components/interactiveComps/TextBox";
import SubmitButton from "../../components/interactiveComps/SubmitButton";
import { connectToDatabase } from "../../database/db";
import { insertGratitudeDiaryEntry, getAllGratitudeDiaryEntries} from "../../database/gratitudeDiary";
import { useNavigation } from "@react-navigation/native";
const GratitudeDiaryScreen = () => {
  const [firstReason, setFirstReason] = useState("");
  const [secondReason, setSecondReason] = useState("");
  const [thirdReason, setThirdReason] = useState("");
  const [firstWhy, setFirstWhy] = useState("");
  const [secondWhy, setSecondWhy] = useState("");
  const [thirdWhy, setThirdWhy] = useState("");

  const navigation = useNavigation();
  
  const handleSubmit = async () => {
    const db = await connectToDatabase();
    const today = new Date().toISOString().slice(0, 10); // Gets current date in YYYY-MM-DD format
  
    insertGratitudeDiaryEntry(
      db,
      firstReason,
      secondReason,
      thirdReason,
      firstWhy,
      secondWhy,
      thirdWhy,
      today,
      () => {
        console.log("Gratitude diary entry saved successfully.");
        // Reset the input fields
        setFirstReason("");
        setSecondReason("");
        setThirdReason("");
        setFirstWhy("");
        setSecondWhy("");
        setThirdWhy("");
        // Navigate back to the HomeScreen
        navigation.navigate("Home");
        
        getAllGratitudeDiaryEntries(
          db,
          (moments) => {
            console.log("Retrieved gratitude diary:", moments);
            // Process or display the retrieved moments as needed
          },
          (error) => {
            console.error("Error retrieving gratitude diary: ", error);
          },
        );
        
      },
      (error) => {
        console.error("Failed to save gratitude diary entry: ", error);
      }
    );
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
            This is the Gratitude Diary page
          </Text>

          {/* Adding TextBox component*/}
          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>First thing that I am grateful for</Text>
              <TextBox
                  onChangeText={(text) => setFirstReason(text)}
                  value={firstReason}
                  placeholder="Describe the first thing..."
                  textInputStyle={{ borderColor: '#634AFA' }} // Custom border color
                />
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>Why this first thing happened?</Text>
              <TextBox
                  onChangeText={(text) => setFirstWhy(text)}
                  value={firstWhy}
                  placeholder="Why did this happen..."
                  textInputStyle={{ borderColor: '#634AFA' }} // Custom border color
                />
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>Second thing that I am grateful for</Text>
              <TextBox
                  onChangeText={(text) => setSecondReason(text)}
                  value={secondReason}
                  placeholder="Describe the second thing..."
                  textInputStyle={{ borderColor: '#634AFA' }} // Custom border color
                />
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>Why this second thing happened?</Text>
              <TextBox
                  onChangeText={(text) => setSecondWhy(text)}
                  value={secondWhy}
                  placeholder="Why did this happen..."
                  textInputStyle={{ borderColor: '#634AFA' }} // Custom border color
                />
            </View>
          </View>
          
          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>Third thing that I am grateful for</Text>
              <TextBox
                  onChangeText={(text) => setThirdReason(text)}
                  value={thirdReason}
                  placeholder="Describe the third thing..."
                  textInputStyle={{ borderColor: '#634AFA' }} // Custom border color
                />
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>Why this third thing happened?</Text>
              <TextBox
                  onChangeText={(text) => setThirdWhy(text)}
                  value={thirdWhy}
                  placeholder="Why did this happen.."
                  textInputStyle={{ borderColor: '#634AFA' }} // Custom border color
                />
            </View>
          </View>

          <View style={styles.buttonContainer}>
          <SubmitButton
              title="Submit"
              onPress={handleSubmit}
              buttonStyle={{ backgroundColor: '#634AFA' }} // Custom background color
            />
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
    color: '#634AFA',
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

export default GratitudeDiaryScreen;
