// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, ImageBackground, Dimensions } from "react-native";

// eslint-disable import/order
import Footer from "../../components/Footer";
import { getConnectionActsForDate } from '../../database/connectionActs';
import { connectToDatabase } from '../../database/db';
import { getGratitudeDiaryForDate } from '../../database/gratitudeDiary';
import { getHedonicMomentsForDate } from '../../database/hedonicMoments';
import { getKindnessActsForDate } from '../../database/kindnessActs';
import InputScreenHeader from "../../components/Header/inputScreenHeader";
import stylesheet from "../../components/Styles/stylesheet";
import Layout from "../../components/Layout";
import CarouselCalendarComp from "../../components/interactiveComps/CarouselCalendar";
import backgroundImage from "../../assets/calendarBackground.png";

// eslint-enable import/order

const {screenWidth} = Dimensions.get('window').width;

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

  const renderGratitude = () => (
    <View style={stylesheet.calendarCardContainer}>
        <Text style={stylesheet.calendarCarouselHeaderText}>Gratitude Diary</Text>
        {data.gratitudeDiarys.map(
        (
            gratitudeDiary,
            index, // Corrected access to moments via data.moments
        ) => (
            <View style={stylesheet.calendarCarouselBodyTextView} key={`gratitudeDiary-${index}`}>
              <Text style={stylesheet.entryText}>First Grateful: {gratitudeDiary.firstGrateful}</Text>
              <Text style={stylesheet.entryText}>Second Grateful: {gratitudeDiary.secondGrateful}</Text>
              <Text style={stylesheet.entryText}>Third Grateful: {gratitudeDiary.thirdGrateful}</Text>
              <Text style={stylesheet.entryText}>first why: {gratitudeDiary.firstWhy}</Text>
              <Text style={stylesheet.entryText}>second why: {gratitudeDiary.secondWhy}</Text>
              <Text style={stylesheet.entryText}>third why: {gratitudeDiary.thirdWhy}</Text>
            </View>
        ),
        )}
    </View>
  );

  const renderConnections = () => (
      <View style={stylesheet.calendarCardContainer}>
          <Text style={stylesheet.calendarCarouselHeaderText}>Acts of Connections</Text>
          {data.connectionActs.map(
          (
              connectionAct,
              index, // Corrected access to moments via data.moments
          ) => (
              <View style={stylesheet.calendarCarouselBodyTextView} key={`connectionAct-${index}`}>
                <Text style={stylesheet.entryText}>First Connection: {connectionAct.firstConnection}</Text>
                <Text style={stylesheet.entryText}>Second Connection: {connectionAct.secondConnection}</Text>
                <Text style={stylesheet.entryText}>Third Connection: {connectionAct.thirdConnection}</Text>
              </View>
          ),
          )}
      </View>
  );

  const renderMoments = () => (
      <View style={stylesheet.calendarCardContainer}>
          <Text style={stylesheet.calendarCarouselHeaderText}>Hedonic Moments</Text>
          {data.moments.map(
          (
              moment,
              index, // Corrected access to moments via data.moments
          ) => (
              <View style={stylesheet.calendarCarouselBodyTextView} key={`moment-${index}`} syle={sectionStyles.entry}>
                <Text style={stylesheet.entryText}>First Moment: {moment.firstMoment}</Text>
                <Text style={stylesheet.entryText}>Second Moment: {moment.secondMoment}</Text>
                <Text style={stylesheet.entryText}>Third Moment: {moment.thirdMoment}</Text>
                <Text style={stylesheet.entryText}>Fourth Moment: {moment.fourthMoment}</Text>
              </View>
          ),
          )}
      </View>
  );

  const renderKindness = () => (
      <View style={stylesheet.calendarCardContainer}>
          <Text style={stylesheet.calendarCarouselHeaderText}>Acts of Kindness</Text>
          {data.kindnessActs.map(
          (
              kindnessAct,
              index, // Corrected access to moments via data.moments
          ) => (
              <View style={stylesheet.calendarCarouselBodyTextView} key={`kindnessAct-${index}`}>
                <Text style={stylesheet.entryText}>First Kindness: {kindnessAct.firstKindness}</Text>
                <Text style={stylesheet.entryText}>Second Kindness: {kindnessAct.secondKindness}</Text>
                <Text style={stylesheet.entryText}>Third Kindness: {kindnessAct.thirdKindness}</Text>
              </View>
          ),
          )}
      </View>
  );

  const renderItem = ({item, index}) => {
      switch(item.type) {
          case 'gratitudeDiary':
              return renderGratitude(item.content);
          case 'connectionActs':
              return renderConnections(item.content);
          case 'kindnessActs':
              return renderKindness(item.content);
          case 'hedonicMoments':
              return renderMoments(item.content);
      }
  }

  const carouselData = [
      {
          type: 'hedonicMoments',
          content: data.moments,
      },
      {
          type: 'connectionActs',
          content: data.connectionActs,
      },
      {
          type: 'kindnessActs',
          content: data.kindnessActs,
      },
      {
          type: 'gratitudeDiary',
          content: data.gratitudeDiarys,
      }
  ]

  return (

    <Layout>
      <InputScreenHeader />
      <CarouselCalendarComp entries={carouselData} renderItem={renderItem} />
      <ImageBackground 
        source={backgroundImage}
        style={stylesheet.backgroundImage}
        testID="background-image"
      />
    </Layout>

  );
};


const sectionStyles = StyleSheet.create({

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
