/* eslint-disable import/order */
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { View, ImageBackground } from 'react-native';

import backgroundImage from '../assets/mindfulnessBackground.png';
import stylesheet from '../components/Styles/stylesheet';
import InputScreenHeader from '../components/Header/inputScreenHeader';
import TrackPlayer from '../components/Footer/TrackPlayer';
import CarouselComp from '../components/interactiveComps/Carousel';
import DailyLayout from '../components/Layout/MindfulnessLayout';
/* eslint-enable import/order */

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
        console.log(sound);
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
      description: "Focus on the tase, smell, and texture of chocolate to bring awareness to the moment",
      animationPath: require("../assets/animations/meditation.json"),
    },
    { 
      id: "Med1",
      title: "Mindfulness of Body and Breath",
      description: "Pay attention to different parts of your body to achieve a state of relaxation",
      animationPath: require("../assets/animations/mindful.json"),
    },
    { 
      id: "Med2",
      title: "The Three Minute Breathing Space",
      description: "Practice deep breathing to calm your mind and reduce stress",
      animationPath: require("../assets/animations/breathing.json"),
    }
  ]

  return (
    <DailyLayout>
      <InputScreenHeader headerStyles={{backgroundColor: "#820263"}}/>
        <View style={stylesheet.dailyMindfulnessButtonContainer}>
          <CarouselComp entries={entries} onActivityPress={(id) => playSound(id)} />
        </View>
      <TrackPlayer onPause={pauseAudio} onPlay={resumeAudio} onRewind={rewindAudio} onFastForward={fastForwardAudio} isPlaying={!!isPlaying}/>
      <ImageBackground
          source={backgroundImage}
          style={stylesheet.backgroundImage}
          testID="background-image"
        />
    </DailyLayout>
  );
}
