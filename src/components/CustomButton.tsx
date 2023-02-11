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
      icon={() => (
        <Icon
          name={iconName}
          size={20}
          color={Colors.textDark}
          style={{
            textAlignVertical: 'center',
          }}
        />
      )}
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
    width: '100%',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    marginBottom: '2%',
    height: 50,
  },
  label: {
    fontSize: 18,
    textAlignVertical: 'center',
    marginTop: '3.5%',
    alignSelf: 'center',
    height: 50,
    fontFamily: Fonts.TextNormal,
    color: Colors.textDark,
  },
});
