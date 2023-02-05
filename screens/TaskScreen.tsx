import React from 'react';
import {ScrollView, SafeAreaView, View} from 'react-native';
import {Text} from 'react-native-paper';
import TaskComponent from '../components/TaskComponent';

import {Colors} from '../style/Colors';
import {Fonts} from '../style/Fonts';

//TODO: LANDING PAGE, YO!
export default function TaskScreen() {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.backgroundDark,
        paddingTop: '10%',
        paddingHorizontal: '4%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '10%',
        }}>
        <Text
          variant="headlineLarge"
          style={{
            color: Colors.textPrimary,
            paddingRight: '6%',
            fontFamily: Fonts.TextMedium,
          }}>
          Tasks
        </Text>
        <View
          style={{
            height: 1,
            flex: 1,
            backgroundColor: Colors.backgroundLight,
          }}
        />
      </View>

      <ScrollView>
        <TaskComponent />
        <TaskComponent />
        <TaskComponent />
      </ScrollView>
    </SafeAreaView>
  );
}
