import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default function App() {
  const [sounds, setSounds] = useState({});

  async function loadSound(audioFile, key) {
    console.log(`Loading Sound: ${key}`);
    const { sound } = await Audio.Sound.createAsync(audioFile);
    setSounds(prevSounds => ({ ...prevSounds, [key]: sound }));
  }

  async function playSound(key) {
    console.log(`Playing Sound: ${key}`);
    const soundToPlay = sounds[key];
    if (soundToPlay) {
      await soundToPlay.playAsync();
    }
  }

  useEffect(() => {
    // Load all sounds
    loadSound(require('../assets/audio/ChocolateMeditation.mp3'), 'chocolateMeditation');
    loadSound(require('../assets/audio/Med1.mp3'), 'Med1');
    loadSound(require('../assets/audio/Med2.mp3'), 'Med2');

    return () => {
      // Unload all sounds
      Object.values(sounds).forEach(sound => {
        if (sound) {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      });
    };
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Play Sound 1" onPress={() => playSound('chocolateMeditation')} />
      <Button title="Play Sound 2" onPress={() => playSound('Med1')} />
      <Button title="Play Sound 3" onPress={() => playSound('Med2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

