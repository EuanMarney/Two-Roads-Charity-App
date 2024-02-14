import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo and have installed @expo/vector-icons

export default function CalendarScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Calendar
        current={'2024-01-01'}
        minDate={'2022-01-01'}
        maxDate={'2026-01-31'}  
        onDayPress={(day) => {navigation.navigate('CalendarRememberance', 
        { selectedDate: day.dateString });
        }}
        monthFormat={'yyyy MMMM'}
        onMonthChange={(month) => { console.log('month changed', month) }}
        renderArrow={(direction) => (<Arrow direction={direction} />)} // Custom arrow rendering
        enableSwipeMonths={true}
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
  // Determine the icon based on the direction
  const iconName = direction === 'left' ? 'arrow-back' : 'arrow-forward';
  return (
    <TouchableOpacity>
      <MaterialIcons name={iconName} size={24} color="black" />
    </TouchableOpacity>
  );
}
