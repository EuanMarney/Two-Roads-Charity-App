import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Layout from "../../components/Layout";
import TextBox from "../../components/interactiveComps/TextBox";
import SubmitButton from "../../components/interactiveComps/SubmitButton";

import { connectToDatabase, createTables } from "../../database/db";
import { insertConnectionAct, getAllActsOfConnection } from "../../database/connectionActs";


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

      const alldata = await getAllActsOfConnection(db);
      console.log(alldata)

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
      <Layout>
        <ScrollView>
          <Text style={styles.headerText}>
            This is the Acts of Connection page
          </Text>

          {/* Adding TextBox component*/}
          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>First Act of Connection</Text>
              <TextBox
                  onChangeText={(text) => setFirstConnectionAct(text)}
                  value={firstConnectionAct}
                  placeholder="Describe the first act..."
                  textInputStyle={{ borderColor: '#FABB4A' }}
                />
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>Second Act of Connection</Text>
              <TextBox
                  onChangeText={(text) => setSecondConnectionAct(text)}
                  value={secondConnectionAct}
                  placeholder="Describe the second act..."
                  textInputStyle={{ borderColor: '#FABB4A' }} 
                />
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>Third Act of Connection</Text>
              <TextBox
                  onChangeText={(text) => setThirdConnectionAct(text)}
                  value={thirdConnectionAct}
                  placeholder="Describe the third act..."
                  textInputStyle={{ borderColor: '#FABB4A' }} 
                />
            </View>
          </View>


          <View style={styles.buttonContainer}>
          <SubmitButton
              title="Submit"
              onPress={handleSubmit}
              buttonStyle={{ backgroundColor: '#FABB4A' }} 
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
    color: '#FABB4A',
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

export default ConnectionActsScreen;
