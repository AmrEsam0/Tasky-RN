import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../style/Colors';
import {Badge, Text} from 'react-native-paper';
import {Fonts} from '../style/Fonts';

export const PressableTab = ({
  onPressLeft,
  onPressRight,
  leftTab,
  ongoingTabActive,
  onGoingTasksCount,
  completedTabActive,
  completedTasksCount,
}: {
  onPressLeft: () => void;
  onPressRight: () => void;
  leftTab: boolean;
  ongoingTabActive: boolean;
  onGoingTasksCount: number;
  completedTabActive: boolean;
  completedTasksCount: number;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        leftTab ? onPressLeft() : onPressRight();
      }}
      style={[
        styles.tab,
        leftTab ? styles.leftTabBorderRadius : styles.rightTabBorderRadius,
        leftTab ? {} : styles.rightTabMargin,
        {
          backgroundColor: leftTab
            ? ongoingTabActive
              ? Colors.backgroundLighter
              : Colors.backgroundTabDark
            : completedTabActive
            ? Colors.backgroundLighter
            : Colors.backgroundTabDark,
        },
      ]}>
      <Text
        variant="bodyMedium"
        style={{
          textAlign: 'center',
          alignSelf: 'center',

          fontFamily: leftTab
            ? ongoingTabActive
              ? Fonts.TextBold
              : Fonts.TextLight
            : completedTabActive
            ? Fonts.TextBold
            : Fonts.TextLight,
          color: leftTab
            ? ongoingTabActive
              ? Colors.textDark
              : Colors.textPrimary
            : completedTabActive
            ? Colors.textDark
            : Colors.textPrimary,
        }}>
        Ongoing
      </Text>
      <Badge
        visible={
          leftTab
            ? onGoingTasksCount > 0
              ? true
              : false
            : completedTasksCount > 0
            ? true
            : false
        }
        style={[
          leftTab ? styles.leftBadgePosition : styles.rightBadgePosition,
          {
            position: 'absolute',
            backgroundColor: leftTab
              ? ongoingTabActive
                ? Colors.backgroundAccent
                : Colors.backgroundLight
              : completedTabActive
              ? Colors.backgroundAccent
              : Colors.backgroundLight,
            color: leftTab
              ? ongoingTabActive
                ? Colors.textDark
                : Colors.textDark
              : completedTabActive
              ? Colors.textDark
              : Colors.textDark,
            fontSize: 10,
            width: 20,
            height: 20,
            borderRadius: 10,
            textAlign: 'center',
            textAlignVertical: 'center',
          },
        ]}>
        {leftTab ? onGoingTasksCount : completedTasksCount}
      </Badge>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  leftTabBorderRadius: {borderTopLeftRadius: 20, borderBottomLeftRadius: 20},
  rightTabBorderRadius: {borderTopRightRadius: 20, borderBottomRightRadius: 20},
  leftBadgePosition: {right: '5%'},
  rightBadgePosition: {left: '5%'},
  rightTabMargin: {marginLeft: '1%'},
});
