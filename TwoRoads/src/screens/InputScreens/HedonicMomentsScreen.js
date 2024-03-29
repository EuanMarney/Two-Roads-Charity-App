import { useNavigation } from "@react-navigation/native";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import * as Haptics from "expo-haptics"

import backgroundImage from "../../assets/hedonicBackground.png";
import InputScreenHeader from "../../components/Header/inputScreenHeader";
import Layout from "../../components/Layout";
import stylesheet from "../../components/Styles/stylesheet";
import SubmitButton from "../../components/interactiveComps/SubmitButton";
import TextBox from "../../components/interactiveComps/TextBox";
import { connectToDatabase, createTables } from "../../database/db";
import { insertHedonicMoment } from "../../database/hedonicMoments";

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
      await createTables(db);

      const today = new Date();
      const formattedDate = today.toISOString().slice(0, 10);

      await insertHedonicMoment(
        db,
        formattedDate,
        firstMoment,
        secondMoment,
        thirdMoment,
        fourthMoment,
      );

      setFirstMoment("");
      setSecondMoment("");
      setThirdMoment("");
      setFourthMoment("");

      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error adding hedonic moments: ", error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={stylesheet.inputScreenTextBoxContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      testID="keyboard-avoiding-view"
    >
      <Layout>
        <InputScreenHeader headerStyles={{ backgroundColor: "#A613CE" }} />
        <ScrollView style={stylesheet.inputScrollView} testID="hedonic-moments-screen">
          {/* Adding TextBox component and BLeaveTextBox */}
          <View
            style={[
              stylesheet.textBoxGroupContainers,
              { backgroundColor: "#A613CE" },
            ]}
          >
            <View style={stylesheet.rowContainer}>
              <View style={stylesheet.textBoxContainer}>
                <Text style={stylesheet.paddedText}>First Hedonic moment</Text>
                <TextBox
                  onChangeText={(text) => setFirstMoment(text)}
                  value={firstMoment}
                  placeholder="Describe the first moment..."
                />
              </View>
            </View>

            <View style={stylesheet.rowContainer}>
              <View style={stylesheet.textBoxContainer}>
                <Text style={stylesheet.paddedText}>Second Hedonic moment</Text>
                <TextBox
                  onChangeText={(text) => setSecondMoment(text)}
                  value={secondMoment}
                  placeholder="Describe the second moment..."
                />
              </View>
            </View>

            <View style={stylesheet.rowContainer}>
              <View style={stylesheet.textBoxContainer}>
                <Text style={stylesheet.paddedText}>Third Hedonic moment</Text>
                <TextBox
                  onChangeText={(text) => setThirdMoment(text)}
                  value={thirdMoment}
                  placeholder="Describe the third moment..."
                />
              </View>
            </View>

            <View style={stylesheet.rowContainer}>
              <View style={stylesheet.textBoxContainer}>
                <Text style={stylesheet.paddedText}>Fourth Hedonic moment</Text>
                <TextBox
                  onChangeText={(text) => setFourthMoment(text)}
                  value={fourthMoment}
                  placeholder="Describe the fourth moment..."
                />
              </View>
            </View>
          </View>

          <View style={stylesheet.inputScreenButtonContainer} testID="submit-button">
            <SubmitButton 
              onPress={handleSubmit} 
              buttonStyle={{backgroundColor: "#A613CE"}}
              title="Submit" />
          </View>
        </ScrollView>
        <ImageBackground
          source={backgroundImage}
          style={stylesheet.backgroundImage}
          testID="background-image"
        />
      </Layout>
    </KeyboardAvoidingView>
  );
};

export default HedonicMomentsScreen;
