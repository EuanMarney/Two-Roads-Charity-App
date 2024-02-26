import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";

import stylesheet from "../../components/Styles/stylesheet";
import Layout from "../../components/Layout";
import SubmitButton from "../../components/interactiveComps/SubmitButton";
import TextBox from "../../components/interactiveComps/TextBox";
import backgroundImage from "../../assets/connectionsBackground.png";

import { connectToDatabase, createTables } from "../../database/db";
import { insertConnectionAct } from "../../database/connectionActs";
import InputScreenHeader from "../../components/Header/inputScreenHeader";

const ConnectionActsScreen = () => {
  const [firstConnectionAct, setFirstConnectionAct] = useState("");
  const [secondConnectionAct, setSecondConnectionAct] = useState("");
  const [thirdConnectionAct, setThirdConnectionAct] = useState("");

  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const db = await connectToDatabase();
      await createTables(db);

      const today = new Date();
      const formattedDate = today.toISOString().slice(0, 10);

      await insertConnectionAct(
        db,
        formattedDate,
        firstConnectionAct,
        secondConnectionAct,
        thirdConnectionAct,
      );

      setFirstConnectionAct("");
      setSecondConnectionAct("");
      setThirdConnectionAct("");

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
      <InputScreenHeader headerStyles={{backgroundColor: "#FABB4A"}}/>
      <Layout>
        <ScrollView style={stylesheet.inputScrollView}>
          {/* <Text style={styles.headerText}>
            This is the Acts of Connection page
          </Text> */}

          {/* Adding TextBox component*/}
          <View style={[stylesheet.textBoxGroupContainers, {backgroundColor: "#FABB4A"}]} >
            <View style={stylesheet.rowContainer}>
              <View style={stylesheet.textBoxContainer}>
                <Text style={stylesheet.paddedText}>First Act of Connection</Text>
                <TextBox
                    onChangeText={(text) => setFirstConnectionAct(text)}
                    value={firstConnectionAct}
                    placeholder="Describe the first act..."
                    textInputStyle={{ borderColor: '#FABB4A' }}
                  />
              </View>
            </View>

            <View style={stylesheet.rowContainer}>
              <View style={stylesheet.textBoxContainer}>
                <Text style={stylesheet.paddedText}>Second Act of Connection</Text>
                <TextBox
                    onChangeText={(text) => setSecondConnectionAct(text)}
                    value={secondConnectionAct}
                    placeholder="Describe the second act..."
                    textInputStyle={{ borderColor: '#FABB4A' }} 
                  />
              </View>
            </View>

            <View style={stylesheet.rowContainer}>
              <View style={stylesheet.textBoxContainer}>
                <Text style={stylesheet.paddedText}>Third Act of Connection</Text>
                <TextBox
                    onChangeText={(text) => setThirdConnectionAct(text)}
                    value={thirdConnectionAct}
                    placeholder="Describe the third act..."
                    textInputStyle={{ borderColor: '#FABB4A' }} 
                  />
              </View>
            </View>
          </View>

          <View style={stylesheet.inputScreenButtonContainer}>
          <SubmitButton
              title="Submit"
              onPress={handleSubmit}
              buttonStyle={{ backgroundColor: '#FABB4A' }} 
            />
          </View>

        </ScrollView>
        <ImageBackground source={backgroundImage} style={stylesheet.backgroundImage} />

      </Layout>
    </KeyboardAvoidingView>
  );
};

export default ConnectionActsScreen;
