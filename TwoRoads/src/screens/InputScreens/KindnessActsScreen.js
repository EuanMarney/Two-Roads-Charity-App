import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { connectToDatabase } from "../../database/db";
import { insertActOfKindness, getAllActsOfKindness } from "../../database/kindnessActs";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../components/Layout";
import TextBox from "../../components/interactiveComps/TextBox";
import SubmitButton from "../../components/interactiveComps/SubmitButton";

const KindnessActsScreen = () => {
  const [firstKindAct, setFirstKindAct] = useState("");
  const [secondKindAct, setSecondKindAct] = useState("");
  const [thirdKindAct, setThirdKindAct] = useState("");
  const navigation = useNavigation();

  // Modify the handleSubmit function within KindnessActsScreen
const handleSubmit = async () => {
  const db = await connectToDatabase();

  // Assuming you want to use the current date for the entry
  const today = new Date();
  const date = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

  insertActOfKindness(
    db,
    firstKindAct,
    secondKindAct,
    thirdKindAct,
    date,
    (resultSet) => {
      console.log("Act of kindness added successfully.", resultSet);
      // Reset the input fields or navigate as needed
      setFirstKindAct("");
      setSecondKindAct("");
      setThirdKindAct("");
      // Navigate back to the HomeScreen
      navigation.navigate("Home");

      getAllActsOfKindness(
        db,
        (acts) => {
          console.log("Retrieved acts of kindness:", acts);
        },
        (error) => {
          console.error("Error retrieving acts of kindness: ", error);
        }
      );

    },
    (error) => {
      console.error("Error adding act of kindness: ", error);
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
            This is the Acts of Kindness page
          </Text>

          {/* Adding TextBox component*/}
          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>First kind thing I did today</Text>
              <TextBox
                  onChangeText={(text) => setFirstKindAct(text)}
                  value={firstKindAct}
                  placeholder="Describe the first act..."
                  textInputStyle={{ borderColor: '#4A89FA' }} // Custom border color
                />
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>Second kind thing I did today</Text>
              <TextBox
                  onChangeText={(text) => setSecondKindAct(text)}
                  value={secondKindAct}
                  placeholder="Describe the second act..."
                  textInputStyle={{ borderColor: '#4A89FA' }} // Custom border color
                />
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.textBoxContainer}>
              <Text style={styles.paddedText}>Third kind thing I did today</Text>
              <TextBox
                  onChangeText={(text) => setThirdKindAct(text)}
                  value={thirdKindAct}
                  placeholder="Describe the third act..."
                  textInputStyle={{ borderColor: '#4A89FA' }} // Custom border color
                />
            </View>
          </View>


          <View style={styles.buttonContainer}>
          <SubmitButton
              title="Submit"
              onPress={handleSubmit}
              buttonStyle={{ backgroundColor: '#4A89FA' }} // Custom background color
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
    color: '#4A89FA',
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

export default KindnessActsScreen;
