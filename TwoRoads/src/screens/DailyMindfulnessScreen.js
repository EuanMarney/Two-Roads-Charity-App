import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { Audio } from 'expo-av';
import Layout from '../components/Layout';

const DailyMindfulnessScreen = () => {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/audio/Mindfulness The Chocolate Meditation.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <Layout>
      <Text>This is the Daily Mindfulness page</Text>
      <Button title="Play Sound" onPress={playSound} />
    </Layout>
  );
};

export default DailyMindfulnessScreen;
