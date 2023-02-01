import React from 'react';
import {StyleSheet, View, Text, StatusBar, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {LoginScreen} from './screens/LoginScreen';
import {Colors} from './style/Colors';

export default function App() {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
      }}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={Colors.bacgroundLight}
      />
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
