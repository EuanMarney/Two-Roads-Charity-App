// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

// eslint-disable-next-line import/order
import { getConnectionActsForDate } from '../../database/connectionActs';
import { connectToDatabase } from '../../database/db';
import { getGratitudeDiaryForDate } from '../../database/gratitudeDiary';
import { getHedonicMomentsForDate } from '../../database/hedonicMoments';
import { getKindnessActsForDate } from '../../database/kindnessActs';

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
    <ScrollView>
      <View style={sectionStyles.gratitudeHeader}>
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
      <View>
        <Text>Connection Acts </Text>
        {data.connectionActs.map(
          (
            connectionAct,
            index, // Corrected access to moments via data.moments
          ) => (
            <View key={`connectionAct-${index}`}>
              <Text>First Connection: {connectionAct.firstConnection}</Text>
              <Text>Second Connection: {connectionAct.secondConnection}</Text>
              <Text>Third Connection: {connectionAct.thirdConnection}</Text>
            </View>
          ),
        )}
      </View>

      {/* Render Gratitude Diary */}
      <View>
        <Text> Gratitude Diary</Text>
        {data.gratitudeDiarys.map(
          (
            gratitudeDiary,
            index, // Corrected access to moments via data.moments
          ) => (
            <View key={`gratitudeDiary-${index}`}>
              <Text>First Grateful: {gratitudeDiary.firstGrateful}</Text>
              <Text>Second Grateful: {gratitudeDiary.secondGrateful}</Text>
              <Text>Third Grateful: {gratitudeDiary.thirdGrateful}</Text>
              <Text>first why: {gratitudeDiary.firstWhy}</Text>
              <Text>second why: {gratitudeDiary.secondWhy}</Text>
              <Text>third why: {gratitudeDiary.thirdWhy}</Text>
            </View>
          ),
        )}
      </View>

      {/* Render kindness Acts */}
      <View>
        <Text>Kindness Acts </Text>
        {data.kindnessActs.map(
          (
            kindnessAct,
            index, // Corrected access to moments via data.moments
          ) => (
            <View key={`kindnessAct-${index}`}>
              <Text>First Kindness: {kindnessAct.firstKindness}</Text>
              <Text>Second Kindness: {kindnessAct.secondKindness}</Text>
              <Text>Third Kindness: {kindnessAct.thirdKindness}</Text>
            </View>
          ),
        )}
      </View>
    </ScrollView>
  );
};


const sectionStyles = StyleSheet.create({
  gratitudeHeader: {
    backgroundColor: '#3892E5', // The blue from the Gratitude Diary image
    padding: 10,
  },
  kindnessHeader: {
    backgroundColor: '#820263', // The purple from the Acts of Kindness image
    padding: 10,
  },
  hedonicHeader: {
    backgroundColor: '#592E83', // The darker purple from the Hedonic Moments image
    padding: 10,
  },
  connectionHeader: {
    backgroundColor: '#2C7761', // The teal from the Acts of Connection image
    padding: 10,
  },
  entry: {
    backgroundColor: '#F0F8FF', // Assuming a light color for entries
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  entryText: {
    color: '#FFFFFF', // White text to stand out against the darker background
  },
  headerText: {
    color: '#FFFFFF', // White text for the header
    fontWeight: 'bold',
  },
});

export default CalendarRememberanceScreen;
