import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";

import stylesheet from "../../components/Styles/stylesheet";
import Layout from "../../components/Layout";
import HomeLayout from "../../components/Layout/HomeLayout";
import SubmitButton from "../../components/interactiveComps/SubmitButton";
import TextBox from "../../components/interactiveComps/TextBox";
import backgroundImage from "../../assets/gratitudeBackground.png";

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
      style={stylesheet.inputScreenTextBoxContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <InputScreenHeader headerStyles={{backgroundColor: "#3892E5"}} />
      <Layout>
        <ScrollView style={stylesheet.inputScrollView}>

          {/* Adding TextBox component*/}
          <View style={stylesheet.textBoxGroupContainers}>
            <View style={stylesheet.inputScreenRowContainer}>
              <View style={stylesheet.inputScreenTextBoxContainer}>
                <Text style={stylesheet.inputScreePaddedText}>First thing that I am grateful for</Text>
                <TextBox
                    onChangeText={(text) => setFirstReason(text)}
                    value={firstReason}
                    placeholder="Describe the first thing..."
                    textInputStyle={{ borderColor: '#634AFA' }} // Custom border color
                  />
              </View>
            </View>

            <View style={stylesheet.inputScreenRowContainer}>
              <View style={stylesheet.inputScreenTextBoxContainer}>
                <Text style={stylesheet.inputScreePaddedText}>Why this first thing happened?</Text>
                <TextBox
                    onChangeText={(text) => setFirstWhy(text)}
                    value={firstWhy}
                    placeholder="Why did this happen..."
                    textInputStyle={{ borderColor: '#634AFA' }} // Custom border color
                  />
              </View>
            </View>
          </View>

          <View style={stylesheet.textBoxGroupContainers} >
            <View style={stylesheet.inputScreenRowContainer}>
              <View style={stylesheet.inputScreenTextBoxContainer}>
                <Text style={stylesheet.inputScreePaddedText}>Second thing that I am grateful for</Text>
                <TextBox
                    onChangeText={(text) => setSecondReason(text)}
                    value={secondReason}
                    placeholder="Describe the second thing..."
                    textInputStyle={{ borderColor: '#634AFA' }} // Custom border color
                  />
              </View>
            </View>

            <View style={stylesheet.inputScreenRowContainer}>
              <View style={stylesheet.inputScreenTextBoxContainer}>
                <Text style={stylesheet.inputScreePaddedText}>Why this second thing happened?</Text>
                <TextBox
                    onChangeText={(text) => setSecondWhy(text)}
                    value={secondWhy}
                    placeholder="Why did this happen..."
                    textInputStyle={{ borderColor: '#634AFA' }} // Custom border color
                  />
              </View>
            </View>
          </View>

          <View style={stylesheet.textBoxGroupContainers}>
            <View style={stylesheet.inputScreenRowContainer}>
              <View style={stylesheet.inputScreenTextBoxContainer}>
                <Text style={stylesheet.inputScreePaddedText}>Third thing that I am grateful for</Text>
                <TextBox
                    onChangeText={(text) => setThirdReason(text)}
                    value={thirdReason}
                    placeholder="Describe the third thing..."
                    textInputStyle={{ borderColor: '#634AFA' }} // Custom border color
                  />
              </View>
            </View>

            <View style={stylesheet.inputScreenRowContainer}>
              <View style={stylesheet.inputScreenTextBoxContainer}>
                <Text style={stylesheet.inputScreePaddedText}>Why this third thing happened?</Text>
                <TextBox
                    onChangeText={(text) => setThirdWhy(text)}
                    value={thirdWhy}
                    placeholder="Why did this happen.."
                    textInputStyle={{ borderColor: '#634AFA' }} // Custom border color
                  />
              </View>
            </View>
          </View>

          <View style={stylesheet.inputScreenButtonContainer}>
          <SubmitButton
              title="Submit"
              onPress={handleSubmit}
              buttonStyle={{ backgroundColor: '#634AFA' }} // Custom background color
            />
          </View>

        </ScrollView>
        <ImageBackground source={backgroundImage} style={stylesheet.backgroundImage}/>
      </Layout>
    </KeyboardAvoidingView>
  );
};

export default GratitudeDiaryScreen;
