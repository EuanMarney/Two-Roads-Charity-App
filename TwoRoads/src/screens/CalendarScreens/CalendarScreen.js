import { MaterialIcons } from "@expo/vector-icons";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";

const today = new Date().toISOString().split("T")[0];

export default function CalendarScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Calendar
        current={today}
        minDate="2022-01-01"
        maxDate="2026-01-31"
        onDayPress={(day) => {
          navigation.navigate("CalendarRememberance", {
            selectedDate: day.dateString,
          });
        }}
        monthFormat="yyyy MMMM"
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        renderArrow={(direction) => <Arrow direction={direction} />}
        enableSwipeMonths
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
  },
});

function Arrow({ direction }) {
  const iconName = direction === "left" ? "arrow-back" : "arrow-forward";
  return (
    <TouchableOpacity>
      <MaterialIcons name={iconName} size={24} color="black" />
    </TouchableOpacity>
  );
}
