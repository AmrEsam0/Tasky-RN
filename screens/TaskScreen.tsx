import React from 'react';
import {View, StatusBar, ScrollView, SafeAreaView} from 'react-native';
import {Text} from 'react-native-paper';

import {Colors} from '../style/Colors';

//TODO: LANDING PAGE, YO!
export default function TaskScreen() {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.backgroundDark,
      }}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: '10%',
          paddingHorizontal: '4%',
        }}>
        <Text style={{color: Colors.textPrimary}}>Tasks are here</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
