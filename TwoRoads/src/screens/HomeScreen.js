import React from "react";
import { View, Button, StyleSheet } from "react-native";
import Layout from "../components/Layout";

const HomeScreen = ({ navigation }) => {
  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <Layout>
      <View style={styles.buttonContainer}>
        <Button
          title="Gratitude Diary"
          onPress={() => handlePress("Gratitude Diary")}
          color="#634AFA"
        />
        <Button
          title="Daily Acts of Kindness"
          onPress={() => handlePress("Acts of Kindness")}
          color="#4A89FA"
        />
        <Button
          title="Hedonic Moments"
          onPress={() => handlePress("Hedonic Moments")}
          color="#BB4AFA"
        />
        <Button
          title="Acts of Connection"
          onPress={() => handlePress("Acts of Connection")}
          color="#FABB4A"
        />
        <Button
          title="Daily Mindfulness"
          onPress={() => handlePress("Daily Mindfulness")}
          color="#82ED46"
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "space-around",
    padding: 10,
  },
});

export default HomeScreen;
