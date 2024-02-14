import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connectToDatabase, createTables, getHedonicMomentsForDate } from '../../database/db';

const CalendarRememberanceScreen = ({ route }) => {
  const [moments, setMoments] = useState([]);
  const { selectedDate } = route.params; // Ensure this matches the parameter name you're passing from the previous screen

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = await connectToDatabase();
        await createTables(db);
        const items = await getHedonicMomentsForDate(db, selectedDate); // Use the modified function that accepts a date
        setMoments(items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedDate]); // Depend on selectedDate to refetch when it changes

  return (
    <View>
        <FlatList
          data={moments}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>Date: {item.date}</Text>
              <Text>First Moment: {item.firstMoment}</Text>
              <Text>Second Moment: {item.secondMoment}</Text>
              <Text>third Moment: {item.thirdMoment}</Text>
              <Text>fourth Moment: {item.fourthMoment}</Text>
            </View>
          )}
        />
    </View>
  );
};

export default CalendarRememberanceScreen;
