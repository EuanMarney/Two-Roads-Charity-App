// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, ImageBackground } from "react-native";

// eslint-disable import/order
import backgroundImage from "../../assets/background.png"
import Footer from "../../components/Footer";
import { getConnectionActsForDate } from '../../database/connectionActs';
import { connectToDatabase } from '../../database/db';
import { getGratitudeDiaryForDate } from '../../database/gratitudeDiary';
import { getHedonicMomentsForDate } from '../../database/hedonicMoments';
import { getKindnessActsForDate } from '../../database/kindnessActs';
// eslint-enable import/order

const CalendarRememberanceScreen = ({ route }) => {
  const [data, setData] = useState({
    moments: [],
    connectionActs: [],
    kindnessActs: [],
    gratitudeDiarys: [],
  });
  const { selectedDate } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = await connectToDatabase();
        const moments = await getHedonicMomentsForDate(db, selectedDate);
        const connectionActs = await getConnectionActsForDate(db, selectedDate);
        const kindnessActs = await getKindnessActsForDate(db, selectedDate);
        const gratitudeDiarys = await getGratitudeDiaryForDate(db, selectedDate);

        setData({
          moments,
          connectionActs,
          kindnessActs,
          gratitudeDiarys,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedDate]);

  // TODO : implement logic that will only grab the last entries from the database. otherwise this will get real messey really quick

  return (
    <ImageBackground source={backgroundImage} style={sectionStyles.backgroundImage}>
    <ScrollView>
      <View style={sectionStyles.hedonicHeader}>
        <Text>Date: {selectedDate}</Text>
        <Text style={sectionStyles.headerText}>Hedonic Moments</Text>
        {data.moments.map(
          (
            moment,
            index, // Corrected access to moments via data.moments
          ) => (
            <View key={`moment-${index}`} syle={sectionStyles.entry}>
              <Text style={sectionStyles.entryText}>First Moment: {moment.firstMoment}</Text>
              <Text style={sectionStyles.entryText}>Second Moment: {moment.secondMoment}</Text>
              <Text style={sectionStyles.entryText}>Third Moment: {moment.thirdMoment}</Text>
              <Text style={sectionStyles.entryText}>Fourth Moment: {moment.fourthMoment}</Text>
            </View>
          ),
        )}
      </View>

      {/* Render Connection Acts */}
      <View style={sectionStyles.connectionHeader}>
        <Text style={sectionStyles.headerText}>Connection Acts </Text>
        {data.connectionActs.map(
          (
            connectionAct,
            index, // Corrected access to moments via data.moments
          ) => (
            <View key={`connectionAct-${index}`}>
              <Text style={sectionStyles.entryText}>First Connection: {connectionAct.firstConnection}</Text>
              <Text style={sectionStyles.entryText}>Second Connection: {connectionAct.secondConnection}</Text>
              <Text style={sectionStyles.entryText}>Third Connection: {connectionAct.thirdConnection}</Text>
            </View>
          ),
        )}
      </View>

      {/* Render Gratitude Diary */}
      <View style={sectionStyles.gratitudeHeader}>
        <Text style={sectionStyles.headerText}> Gratitude Diary</Text>
        {data.gratitudeDiarys.map(
          (
            gratitudeDiary,
            index, // Corrected access to moments via data.moments
          ) => (
            <View key={`gratitudeDiary-${index}`}>
              <Text style={sectionStyles.entryText}>First Grateful: {gratitudeDiary.firstGrateful}</Text>
              <Text style={sectionStyles.entryText}>Second Grateful: {gratitudeDiary.secondGrateful}</Text>
              <Text style={sectionStyles.entryText}>Third Grateful: {gratitudeDiary.thirdGrateful}</Text>
              <Text style={sectionStyles.entryText}>first why: {gratitudeDiary.firstWhy}</Text>
              <Text style={sectionStyles.entryText}>second why: {gratitudeDiary.secondWhy}</Text>
              <Text style={sectionStyles.entryText}>third why: {gratitudeDiary.thirdWhy}</Text>
            </View>
          ),
        )}
      </View>

      {/* Render kindness Acts */}
      <View style={sectionStyles.kindnessHeader}>
        <Text style={sectionStyles.headerText}>Kindness Acts </Text>
        {data.kindnessActs.map(
          (
            kindnessAct,
            index, // Corrected access to moments via data.moments
          ) => (
            <View key={`kindnessAct-${index}`}>
              <Text style={sectionStyles.entryText}>First Kindness: {kindnessAct.firstKindness}</Text>
              <Text style={sectionStyles.entryText}>Second Kindness: {kindnessAct.secondKindness}</Text>
              <Text style={sectionStyles.entryText}>Third Kindness: {kindnessAct.thirdKindness}</Text>
            </View>
          ),
        )}
      </View>
    </ScrollView>
    <Footer/>
    </ImageBackground>
  );
};


const sectionStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Make sure it covers the whole screen
    width: null, // These width and height settings
    height: null, // ensure the image covers the whole container
  },
  gratitudeHeader: {
    backgroundColor: '#3892E5', // The blue from the Gratitude Diary image
    padding: 16, // Increased padding for spacing from the screen edges
    alignItems: 'center', // Center items horizontally (along the cross axis)
  },
  kindnessHeader: {
    backgroundColor: '#AA9CFC', // The purple from the Acts of Kindness image
    padding: 16,
    alignItems: 'center',
  },
  hedonicHeader: {
    backgroundColor: '#DA9CFC', // The darker purple from the Hedonic Moments image
    padding: 16,
    alignItems: 'center',
  },
  connectionHeader: {
    backgroundColor: '#70FFC8', // The teal from the Acts of Connection image
    padding: 16,
    alignItems: 'center',
  },
  entry: {
    backgroundColor: '#000000', // Assuming a light color for entries
    margin: 5,
    padding: 10,
    borderRadius: 5,
    // Add padding to the sides for each entry
    paddingHorizontal: 16,
  },
  entryText: {
    color: '#000000', // White text to stand out against the darker background
    textAlign: 'center', // Center text horizontally
  },
  headerText: {
    color: '#FFFFFF', // White text for the header
    fontWeight: 'bold',
    textAlign: 'center', // Center text horizontally
  },
});


export default CalendarRememberanceScreen;
