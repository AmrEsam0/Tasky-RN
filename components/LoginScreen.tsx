import React, {useState} from 'react';
import {Text, StyleSheet, View, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};

export const LoginScreen = (props: Props) => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.card}>
      <Image source={require('../assets/avatar.png')} style={styles.image} />

      <Text style={[styles.baseText, styles.title]}>Login</Text>
      <View>
        <Icon name="email-outline" size={60} color="#ffffff" />
        <TextInput style={styles.input} />
      </View>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonRow: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#EBEBEB',
    borderRadius: 3,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  baseText: {
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2C2A57',
  },
  number: {
    fontSize: 80,
  },
  buttonDisabled: {
    backgroundColor: '#2C2C2C',
  },
  image: {
    height: 100,
    width: 100,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 3,
  },
});
