import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from '../screens/LoginScreen';
import {Colors} from '../style/Colors';

//TODO: LANDING PAGE, YO!
export default function App() {
  const Stack = createNativeStackNavigator();
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
    </View>
  );
}

const styles = StyleSheet.create({});
