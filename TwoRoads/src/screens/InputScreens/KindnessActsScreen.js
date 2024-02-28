import { useNavigation } from "@react-navigation/native";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";

import backgroundImage from "../../assets/kindnessBackground.png";
import InputScreenHeader from "../../components/Header/inputScreenHeader";
import Layout from "../../components/Layout";
import stylesheet from "../../components/Styles/stylesheet";
import SubmitButton from "../../components/interactiveComps/SubmitButton";
import TextBox from "../../components/interactiveComps/TextBox";
import { connectToDatabase, createTables } from "../../database/db";
import { insertActOfKindness, getAllActsOfKindness } from "../../database/kindnessActs";
<<<<<<< HEAD
=======

>>>>>>> 015b05748414344972ae95ea13ee852c5171ed6b

const KindnessActsScreen = () => {
  const [firstKindAct, setFirstKindAct] = useState("");
  const [secondKindAct, setSecondKindAct] = useState("");
  const [thirdKindAct, setThirdKindAct] = useState("");
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const db = await connectToDatabase();
      await createTables(db);

      const today = new Date();
      const formattedDate = today.toISOString().slice(0, 10);

      insertActOfKindness(
        db,
        formattedDate,
        firstKindAct,
        secondKindAct,
        thirdKindAct,
      );

      setFirstKindAct("");
      setSecondKindAct("");
      setThirdKindAct("");

      navigation.navigate("Home");

      const alldata = await getAllActsOfKindness(db);
      console.log(alldata);
    } catch (error) {
      console.error("Error adding Kindness Acts: ", error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={stylesheet.inputScreenTextBoxContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <Layout>
        <InputScreenHeader headerStyles={{ backgroundColor: "#AA9CFC" }} />
        <ScrollView style={stylesheet.inputScrollView}>
          {/* <Text style={styles.headerText}>
            This is the Acts of Kindness page
          </Text> */}

          {/* Adding TextBox component */}
          <View
            style={[
              stylesheet.textBoxGroupContainers,
              { backgroundColor: "#AA9CFC" },
            ]}
          >
            <View style={stylesheet.rowContainer}>
              <View style={stylesheet.textBoxContainer}>
                <Text style={stylesheet.paddedText}>
                  First kind thing I did today
                </Text>
                <TextBox
                  onChangeText={(text) => setFirstKindAct(text)}
                  value={firstKindAct}
                  placeholder="Describe the first act..."
                  textInputStyle={{ borderColor: "#4A89FA" }} // Custom border color
                />
              </View>
            </View>

            <View style={stylesheet.rowContainer}>
              <View style={stylesheet.textBoxContainer}>
                <Text style={stylesheet.paddedText}>
                  Second kind thing I did today
                </Text>
                <TextBox
                  onChangeText={(text) => setSecondKindAct(text)}
                  value={secondKindAct}
                  placeholder="Describe the second act..."
                  textInputStyle={{ borderColor: "#4A89FA" }} // Custom border color
                />
              </View>
            </View>

            <View style={stylesheet.rowContainer}>
              <View style={stylesheet.textBoxContainer}>
                <Text style={stylesheet.paddedText}>
                  Third kind thing I did today
                </Text>
                <TextBox
                  onChangeText={(text) => setThirdKindAct(text)}
                  value={thirdKindAct}
                  placeholder="Describe the third act..."
                  textInputStyle={{ borderColor: "#4A89FA" }} // Custom border color
                />
              </View>
            </View>
          </View>

          <View style={stylesheet.inputScreenButtonContainer}>
            <SubmitButton
              title="Submit"
              onPress={handleSubmit}
              buttonStyle={{ backgroundColor: "#4A89FA" }} // Custom background color
            />
          </View>
        </ScrollView>
        <ImageBackground
          source={backgroundImage}
          style={stylesheet.backgroundImage}
        />
      </Layout>
    </KeyboardAvoidingView>
  );
};

export default KindnessActsScreen;
