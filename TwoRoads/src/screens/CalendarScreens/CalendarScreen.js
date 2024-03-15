
import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

import { getAllActsOfConnection } from '../../database/connectionActs';
import { connectToDatabase } from '../../database/db';
import { getAllGratitudeDiaryEntries } from '../../database/gratitudeDiary';
import { getAllHedonicMoments } from '../../database/hedonicMoments';
import { getAllActsOfKindness } from '../../database/kindnessActs';


const today = new Date().toISOString().split('T')[0];

export default function CalendarScreen({ navigation }) {
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    const fetchAndMarkDates = async () => {
      try {
        const db = await connectToDatabase();
        const moments = await getAllHedonicMoments(db);
        const connectionActs = await getAllActsOfConnection(db);
        const kindnessActs = await getAllActsOfKindness(db);
        const gratitudeDiarys = await getAllGratitudeDiaryEntries(db);

        const allEntries = [...moments, ...connectionActs, ...kindnessActs, ...gratitudeDiarys];

        let newMarkedDates = {};
        allEntries.forEach(entry => {
          console.log('Entry:', entry); // This will show each entry
          if (!entry.date) {
            console.log('No date for entry:', entry);
            return; // Skip this entry if it has no date
          }
        
          if (!newMarkedDates[entry.date]) {
            newMarkedDates[entry.date] = { dots: [] };
            console.log('Initializing entry for date:', entry.date);
          }
          
          if (entry.hasOwnProperty('firstConnection')) {
            newMarkedDates[entry.date].dots.push({ color: '#70FFC8' });
            console.log('Green dot added for date:', entry.date, newMarkedDates[entry.date].dots);
          }
          
          if (entry.hasOwnProperty('firstMoment')) {
            newMarkedDates[entry.date].dots.push({ color: '#DA9CFC' });
            console.log('Purple dot added for date:', entry.date, newMarkedDates[entry.date].dots);
          }
          if (entry.hasOwnProperty('firstKindness')) {


            newMarkedDates[entry.date].dots.push({ color: '#AA9CFC' });

          }
          if (entry.hasOwnProperty('firstGrateful')) {
            newMarkedDates[entry.date].dots.push({ color: '#3892E5' });
            console.log('all dots added:', entry.date, newMarkedDates[entry.date].dots);
          }
        });

        setMarkedDates(newMarkedDates);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAndMarkDates();
  }, []);

  return (
    <View style={styles.container}>
      <Calendar
        current={today}
        minDate='2022-01-01'
        maxDate='2026-01-31'
        onDayPress={(day) => {
          navigation.navigate('CalendarRememberance', {
            selectedDate: day.dateString,
          });
        }}
        monthFormat='yyyy MMMM'
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        renderArrow={(direction) => <Arrow direction={direction} />}
        enableSwipeMonths
        markedDates={markedDates} // Make sure to pass the markedDates to the Calendar
        markingType={'multi-dot'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
});

function Arrow({ direction }) {
  const iconName = direction === 'left' ? 'arrow-back' : 'arrow-forward';
  return (
    <TouchableOpacity>
      <MaterialIcons name={iconName} size={24} color='black' />
    </TouchableOpacity>
  );
}
