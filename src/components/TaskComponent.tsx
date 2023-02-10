import React, {useState} from 'react';
import {View} from 'react-native';
import {Checkbox, TextInput} from 'react-native-paper';
import {Colors} from '../style/Colors';

const TaskComponent = () => {
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
      <TextInput
        style={{
          backgroundColor: Colors.backgroundDark,
          flex: 1,
          textDecorationLine: 'line-through',
        }}
        textColor={Colors.textPrimary}
        outlineColor=""
        value={value}
        dense={true}
        onChangeText={value => setValue(value)}
        outlineStyle={{borderRadius: 0, borderWidth: 0}}
        activeOutlineColor={Colors.backgroundDark}
        activeUnderlineColor={Colors.backgroundDark}
        underlineStyle={{height: 0}}
        cursorColor={Colors.textAccent}
        selectionColor={Colors.textGrey}
      />
    </View>
  );
};

export default TaskComponent;
