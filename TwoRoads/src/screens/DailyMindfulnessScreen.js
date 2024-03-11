import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import LottieView from 'lottie-react-native';

import stylesheet from '../components/Styles/stylesheet';
import Layout from '../components/Layout';
import InputScreenHeader from '../components/Header/inputScreenHeader';
import TrackPlayer from '../components/Footer/TrackPlayer';
import CarouselComp from '../components/interactiveComps/Carousel';

export default function App() {

  const [sounds, setSounds] = useState();
  const [currentSound, setCurrentSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const rewindFastForwardAmount = 10000;

  async function loadSound(audioFile, key) {
    console.log(`Loading Sound: ${key}`);
    const { sound } = await Audio.Sound.createAsync(audioFile);
    setSounds(prevSounds => ({ ...prevSounds, [key]: sound }));
  }

  async function playSound(key) {
    console.log(`Playing Sound: ${key}`);

    //stop audio overlapping
    if (currentSound) {
      await currentSound.stopAsync();
    }

    const soundToPlay = sounds[key];
    if (soundToPlay) {
      await soundToPlay.playAsync();
      setCurrentSound(soundToPlay); 
      setIsPlaying(true);
    }
  }

  async function pauseAudio() {
    if(currentSound && isPlaying) {
      await currentSound.pauseAsync();
      setIsPlaying(false);
    }
  }

  async function resumeAudio() {
    if(currentSound && !isPlaying) {
      await currentSound.playAsync();
      setIsPlaying(true);
    }
  }

  async function rewindAudio() {
    if(currentSound && isPlaying) {
      const status = await currentSound.getStatusAsync();
      const newPosition = Math.max(0, status.positionMillis - rewindFastForwardAmount);
      await currentSound.setPositionAsync(newPosition);
    }
  }

  async function fastForwardAudio() {
    if(currentSound && isPlaying) {
      const status = await currentSound.getStatusAsync();
      const newPosition = Math.max(0, status.positionMillis + rewindFastForwardAmount);
      if(newPosition < status.durationMillis) {
        await currentSound.setPositionAsync(newPosition);
      }
    }
  }


  useEffect(() => {
  
    loadSound(require('../assets/audio/ChocolateMeditation.mp3'), 'chocolateMeditation');
    loadSound(require('../assets/audio/Med1.mp3'), 'Med1');
    loadSound(require('../assets/audio/Med2.mp3'), 'Med2');

    return () => {
      
      Object.values(sounds).forEach(sound => {
        if (sound) {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      });
    };
  }, []);

  const entries = [
    {
      id: "chocolateMeditation",
      title: "Chocolate Meditation",
      description: "Focus on the tase, smell, and texture of chocolate to bring awareness to the moment"
  
    },
    { 
      id: "Med1",
      title: "Mindfulness of Body and Breath",
      description: "Pay attention to different parts of your body to achieve a state of relaxation",
    },
    { 
      id: "Med2",
      title: "The Three Minute Breathing Space",
      description: "Practice deep breathing to calm your mind and reduce stress",
    }
  ]

  return (
    <Layout>
      <InputScreenHeader headerStyles={{backgroundColor: "#82ED46"}}/>
        <View style={stylesheet.dailyMindfulnessButtonContainer}>

          <CarouselComp entries={entries} onActivityPress={() => playSound(entries.id)} />

          {/* {buttons.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={[stylesheet.dailyMindfulnessButtons, {backgroundColor: "transparent"}]}
              onPress={() => playSound(button.title)}>
                <Text style={stylesheet.dailyMindfulnessText}>{button.title}</Text>
            </TouchableOpacity>
          ))} */}
        </View>
      <TrackPlayer onPause={pauseAudio} onPlay={resumeAudio} onRewind={rewindAudio} onFastForward={fastForwardAudio} isPlaying={!!isPlaying}/>
    </Layout>
  );
}
