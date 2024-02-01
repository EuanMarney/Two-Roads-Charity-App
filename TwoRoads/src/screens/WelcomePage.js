import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

import TwoRoadsImage from '../assets/twoRoads.png';
import LoginHeader from '../components/Header/LoginHeader';

// Get the full screen width
const { width } = Dimensions.get('window');

const WelcomePage = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <LoginHeader />

      <Text style={styles.title}>Welcome to The Two Roads Charity App</Text>
      <View style={styles.textContainer}>
        <Text style={styles.description}>
          Your companion for mental well-being. Track your gratitude, kindness, and daily moments of joy. Engage in acts of connection and mindfulness with our guided support.
        </Text>
        <Text style={styles.description}>
          To begin, create an account and set up a personal passcode to keep your entries secure.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegisterScreen')} // Make sure this is the correct name for your route
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: 'white',
  },

  title: {
    fontSize: width * 0.06, // Adjust the multiplier for different font size
    fontWeight: 'bold',
    color: '#2c3e50', // Dark shade for better contrast
    textAlign: 'center',
    marginTop: "5%",
    marginBottom: "2%",
    paddingHorizontal: 10,
  },
  textContainer: {
    paddingHorizontal: 20, // Side padding
    paddingTop: "5%",
    paddingBottom: "8%"
  },
  description: {
    fontSize: width * 0.04, // Smaller than title
    textAlign: 'center',
    color: '#34495e', // Slightly lighter than title for hierarchy
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db', // A calming blue color for the button
    borderRadius: 20, // Rounded corners
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: width * 0.05, // Responsive font size for the button
    fontWeight: 'bold',
  },
});

export default WelcomePage;
