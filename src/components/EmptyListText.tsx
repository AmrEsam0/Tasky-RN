import {StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {Colors} from '../style/Colors';
import {Fonts} from '../style/Fonts';

export const EmptyListText = ({text}: {text: string}) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    marginTop: '70%',
    color: Colors.textGrey,
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: Fonts.TextLight,
  },
});
