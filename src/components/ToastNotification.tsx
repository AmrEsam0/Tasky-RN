import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {Colors} from '../style/Colors';
import {Fonts} from '../style/Fonts';

export const CustomToastNotification = ({
  onPressUndo,
}: {
  onPressUndo: () => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <Text style={styles.title}>Task Deleted</Text>
      </View>
      <TouchableOpacity
        hitSlop={{
          top: 20,
          bottom: 20,
          left: 25,
          right: 20,
        }}
        onPress={() => {
          //put the task back in the list
          onPressUndo();
        }}>
        <Text style={styles.undo}>Undo?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '6%',
    width: '70%',
    position: 'absolute',
    bottom: '15%',
    backgroundColor: Colors.backgroundTabDark,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '4%',
    alignSelf: 'center',
    elevation: 4,
  },
  leftView: {
    flex: 0.75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    color: Colors.textPrimary,
    fontFamily: Fonts.TextBold,
  },
  undo: {
    fontSize: 14,
    color: '#FF0000',
    fontFamily: Fonts.TextBold,
  },
});
