import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg'; // For custom icons
import { Feather } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store'
import LoginHeader from '../../components/Header/LoginHeader';

const PinScreenReg2 = ({ navigation }) => {
  const [pinv2, setPin] = useState('');

  const getPin = async () => {
    try {
        return await SecureStore.getItemAsync('pin');
        } catch (e) {
        console.error('Error finding pin', e)
        }   
    }

  const getUsername = async () => {
    console.log('username =', await SecureStore.getItemAsync('username'))
    return await SecureStore.getItemAsync('username');
  }

  const comparePin = async (enteredPin) => {
    try {
        const storedPin = await getPin();
        const username = await getUsername();
        if (enteredPin === storedPin){
            navigation.navigate('Home')
            alert('welcome ' + username)
        } else {
            alert('those pins did not match')
            setPin(pinLogin.substring(0, pinLogin.length - 6));
        }

    } catch(e) {
        console.error('Error comparing pins', e)
    }
  }

  const handlePress = (num) => {
    if (pinv2.length < 6) {
      setPin(pinv2 + num);
    }
  };

  const handleDelete = () => {
    setPin(pinv2.substring(0, pinv2.length - 1));
  };

  const handleSubmit = () => {
    if (pinv2.length === 6) {
      console.log(pinv2);
      comparePin(pinv2)
    } else {
      alert('Please enter a 6-digit pin');
      setPin(pinv2.substring(0, pinv2.length - 6));
    }
  };

  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < 6; i++) {
      circles.push(
        <View
          key={i}
          style={[
            styles.circle,
            { backgroundColor: i < pinv2.length ? 'black' : 'transparent' },
          ]}
        />
      );
    }
    return circles;
  };

  return (
    <View style={styles.container}>

      <LoginHeader />

      <Text style={styles.title}>Enter your 6-digit passcode again</Text>
      <View style={styles.circleContainer}>{renderCircles()}</View>
      <View style={styles.numbersContainer}>
        {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
          <TouchableOpacity
            key={num}
            style={styles.number}
            onPress={() => handlePress(num.toString())}
          >
            <Text style={styles.numberText}>{num}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.icon} onPress={() => handleDelete()}>
            <Feather name="delete" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          key='0'
          style={[styles.number, { marginLeft: 30 }]}
          onPress={() => handlePress('0')}
        >
          <Text style={styles.numberText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => console.log('Implement password recovery')}>
      <Text style={styles.forgotText}>I can't log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 18,
    marginBottom: 40,
    marginTop: 20,
  },
  circleContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: 300,
},
number: {
    width: 75,
    height: 75,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    borderWidth: 1,
    borderColor: 'black',
},
numberText: {
    fontSize: 24,
},
icon: {
    marginLeft: 15,
    width: 60,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
},
forgotText: {
    marginTop: 20,
    color: 'blue',
},
submitButtonText: {
    marginTop: 20,
    color: 'black',
    fontSize: 18,
},
button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
},
});

export default PinScreenReg2;