import { useNavigation } from "@react-navigation/native";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";

import backgroundImage from "../../assets/connectionsBackground.png";
import InputScreenHeader from "../../components/Header/inputScreenHeader";
import Layout from "../../components/Layout";
import stylesheet from "../../components/Styles/stylesheet";
import SubmitButton from "../../components/interactiveComps/SubmitButton";
import TextBox from "../../components/interactiveComps/TextBox";
import { insertConnectionAct } from "../../database/connectionActs";
import { connectToDatabase, createTables } from "../../database/db";

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
      testID="keyboard-avoiding-view"
    >
      <InputScreenHeader headerStyles={{ backgroundColor: "#008F85" }} />
      <Layout>
        <ScrollView style={stylesheet.inputScrollView} testID="connection-acts-screen">
          {/* <Text style={styles.headerText}>
            This is the Acts of Connection page
          </Text> */}

          {/* Adding TextBox component */}
          <View
            style={[
              stylesheet.textBoxGroupContainers,
              { backgroundColor: "#008F85" },
            ]}
          >
            <View style={stylesheet.rowContainer}>
              <View style={stylesheet.textBoxContainer}>
                <Text style={stylesheet.paddedText}>
                  First Act of Connection
                </Text>
                <TextBox
                  onChangeText={(text) => setFirstConnectionAct(text)}
                  value={firstConnectionAct}
                  placeholder="Describe the first act..."
                  textInputStyle={{ borderColor: "#008F85" }}
                />
              </View>
            </View>

            <View style={stylesheet.rowContainer}>
              <View style={stylesheet.textBoxContainer}>
                <Text style={stylesheet.paddedText}>
                  Second Act of Connection
                </Text>
                <TextBox
                  onChangeText={(text) => setSecondConnectionAct(text)}
                  value={secondConnectionAct}
                  placeholder="Describe the second act..."
                  textInputStyle={{ borderColor: "#008F85" }}
                />
              </View>
            </View>

            <View style={stylesheet.rowContainer}>
              <View style={stylesheet.textBoxContainer}>
                <Text style={stylesheet.paddedText}>
                  Third Act of Connection
                </Text>
                <TextBox
                  onChangeText={(text) => setThirdConnectionAct(text)}
                  value={thirdConnectionAct}
                  placeholder="Describe the third act..."
                  textInputStyle={{ borderColor: "#008F85" }}
                />
              </View>
            </View>
          </View>

          <View style={stylesheet.inputScreenButtonContainer} testID="submit-button">
            <SubmitButton
              title="Submit"
              onPress={handleSubmit}
              buttonStyle={{ backgroundColor: "#008F85" }}
              testID="submit-button"
            />
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

export default ConnectionActsScreen;
