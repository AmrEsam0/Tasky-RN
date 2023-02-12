import React, {useState} from 'react';
import {View} from 'react-native';
import {Checkbox, IconButton, Text, TextInput} from 'react-native-paper';
import {Colors} from '../style/Colors';

const TaskComponent = ({
  taskName,
  isComplete,
  deleteTask,
  taskID,
}: {
  taskName: string;
  isComplete: boolean;
  taskID: number;
  deleteTask: (id: number) => Promise<void>;
}) => {
  const [taskCheck, setTaskCheck] = useState(isComplete);
  //make sure to update the isComplete value from props to the state
  isComplete = taskCheck;
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
        //initially use isComplete value from props to set the checkbox status after adding a new task
        status={isComplete ? 'checked' : 'unchecked'}
        color={Colors.textAccent}
        onPress={() => {
          setTaskCheck(!taskCheck);
        }}
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
      <IconButton
        icon={'delete'}
        iconColor={Colors.textError}
        onPress={() => deleteTask(taskID)}
      />
    </View>
  );
};

export default TaskComponent;
