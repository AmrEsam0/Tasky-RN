import React, {useState} from 'react';
import {View} from 'react-native';
import {Checkbox, Text, TextInput} from 'react-native-paper';
import {Colors} from '../style/Colors';

const TaskComponent = ({taskName}: {taskName: string}) => {
  const [taskCheck, setTaskCheck] = useState(false);
  const [value, setValue] = useState('');
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
        status={taskCheck ? 'checked' : 'unchecked'}
        color={Colors.textAccent}
        onPress={() => setTaskCheck(!taskCheck)}
      />
      <Text
        style={{
          backgroundColor: Colors.backgroundDark,
          flex: 1,
          textDecorationLine: taskCheck ? 'line-through' : 'none',
          color: taskCheck ? Colors.textGrey : Colors.textPrimary,
          marginStart: '2%',
          fontSize: 18,
        }}>
        {taskName}
      </Text>
    </View>
  );
};

export default TaskComponent;
