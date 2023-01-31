import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {LoginScreen} from './components/LoginScreen';
import {NumAPICard} from './components/NumAPICard';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
      {/* <NumAPICard /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2A57',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainHeader: {
    alignSelf: 'flex-start',
    fontSize: 90,
    flex: 0.2,
    color: '#2C2A57',
    marginBottom: 20,
  },
});
