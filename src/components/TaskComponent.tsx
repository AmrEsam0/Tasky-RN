import React, {useState} from 'react';
import {View} from 'react-native';
import {Checkbox, Text, TextInput} from 'react-native-paper';
import {Colors} from '../style/Colors';

const TaskComponent = ({
  taskName,
  isComplete,
}: {
  taskName: string;
  isComplete: boolean;
}) => {
  const [taskCheck, setTaskCheck] = useState(isComplete);
  return (
    <View
      style={{
        backgroundColor: Colors.backgroundDark,
        flexDirection: 'row',
        marginHorizontal: '1%',
        marginBottom: '6%',
        alignItems: 'center',
        borderRadius: 10,
        padding: '1%',
      }}>
      <Checkbox
        status={isComplete ? 'checked' : 'unchecked'}
        color={Colors.textAccent}
        onPress={() => setTaskCheck(!taskCheck)}
      />
      <Text
        style={{
          backgroundColor: Colors.backgroundDark,
          flex: 1,
          textDecorationLine: isComplete ? 'line-through' : 'none',
          color: isComplete ? Colors.textGrey : Colors.textPrimary,
          marginStart: '2%',
          fontSize: 18,
        }}>
        {taskName}
      </Text>
    </View>
  );
};

export default TaskComponent;
