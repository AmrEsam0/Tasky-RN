import React from 'react';
import {StyleSheet, View, Text, StatusBar, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {LoginScreen} from './screens/LoginScreen';

export default function App() {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
      }}>
      <StatusBar translucent backgroundColor="#1706405F" />
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
