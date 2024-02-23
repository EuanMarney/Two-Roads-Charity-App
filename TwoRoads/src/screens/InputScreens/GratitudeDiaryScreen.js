import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";

import stylesheet from "../../components/Styles/stylesheet";
import Layout from "../../components/Layout";
import HomeLayout from "../../components/Layout/HomeLayout";
import SubmitButton from "../../components/interactiveComps/SubmitButton";
import TextBox from "../../components/interactiveComps/TextBox";

import { connectToDatabase, createTables } from "../../database/db";
import { insertGratitudeDiaryEntry } from "../../database/gratitudeDiary";
import InputScreenHeader from "../../components/Header/inputScreenHeader";

const GratitudeDiaryScreen = () => {
  const [firstReason, setFirstReason] = useState("");
  const [secondReason, setSecondReason] = useState("");
  const [thirdReason, setThirdReason] = useState("");
  const [firstWhy, setFirstWhy] = useState("");
  const [secondWhy, setSecondWhy] = useState("");
  const [thirdWhy, setThirdWhy] = useState("");

  const navigation = useNavigation();
  
  const handleSubmit = async () => {
    try {
    const db = await connectToDatabase();
    await createTables(db);

    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10);
  
    insertGratitudeDiaryEntry(
      db,
      formattedDate,
      firstReason,
      secondReason,
      thirdReason,
      firstWhy,
      secondWhy,
      thirdWhy,
    );

        setFirstReason("");
        setSecondReason("");
        setThirdReason("");
        setFirstWhy("");
        setSecondWhy("");
        setThirdWhy("");

        navigation.navigate("Home");
        
      } catch (error) {
        console.error("Error handling connection acts: ", error);
      }
  };

  return (
    <KeyboardAvoidingView
      style={styles.textBoxContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <InputScreenHeader />
      <Layout>
        <ScrollView>
          {/* <Text style={styles.headerText}>
            This is the Gratitude Diary page
          </Text> */}

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
