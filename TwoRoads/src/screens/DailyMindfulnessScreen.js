import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default function App() {
  const [soundObject, setSoundObject] = useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/ChocolateMeditation.mp3"),
    );
    setSoundObject(sound);

    console.log("Playing Sound");
    await soundObject.playAsync();
  }

  useEffect(() => {
    return soundObject
      ? () => {
          console.log("Unloading Sound");
          soundObject.unloadAsync();
        }
      : undefined;
  }, [soundObject]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
