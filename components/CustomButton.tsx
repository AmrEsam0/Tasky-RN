import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../style/Colors';
import {Fonts} from '../style/Fonts';

export const CustomButton = ({
  label,
  navigateTo,
  iconName,
}: {
  label: string;
  navigateTo: () => void;
  iconName: string;
}) => {
  return (
    <Button
      icon={() => <Icon name={iconName} size={22} color={Colors.textDark} />}
      mode="contained"
      style={styles.button}
      labelStyle={styles.label}
      onPress={navigateTo}>
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.backgroundLighter,
    marginTop: '4%',
    width: '46%',
    alignSelf: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    marginBottom: '2%',
  },
  label: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: '9%',
    fontFamily: Fonts.TextNormal,
    color: Colors.textDark,
  },
});
