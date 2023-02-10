import React, {useState} from 'react';
import {View} from 'react-native';
import {Checkbox, TextInput} from 'react-native-paper';
import {Colors} from '../style/Colors';

const TaskComponent = () => {
  const [taskCheck, setTaskCheck] = useState(false);
  const [value, setValue] = useState('');
  const [borderColor, setBorderColor] = useState(Colors.backgroundLight);
  return (
    <View
      style={{
        backgroundColor: Colors.backgroundDark,
        flexDirection: 'row',
        marginHorizontal: '1%',
        marginBottom: '6%',
        alignItems: 'center',
        // borderColor: borderColor,
        // borderWidth: 1,
        borderRadius: 10,
        padding: '1%',
      }}>
      <Checkbox
        status={taskCheck ? 'checked' : 'unchecked'}
        color={Colors.textAccent}
        onPress={() => setTaskCheck(!taskCheck)}
      />
      <TextInput
        style={{
          backgroundColor: Colors.backgroundDark,
          flex: 1,
          textDecorationLine: taskCheck ? 'line-through' : 'none',
        }}
        textColor={Colors.textPrimary}
        outlineColor=""
        value={value}
        dense={true}
        onChangeText={value => setValue(value)}
        outlineStyle={{borderRadius: 0, borderWidth: 0}}
        activeOutlineColor={Colors.backgroundDark}
        activeUnderlineColor={Colors.backgroundDark}
        underlineColor={Colors.backgroundDark}
        cursorColor={Colors.textAccent}
        selectionColor={Colors.textGrey}
      />
    </View>
  );
};

export default TaskComponent;
