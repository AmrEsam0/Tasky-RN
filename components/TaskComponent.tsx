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
        flexDirection: 'row',
        marginHorizontal: '4%',
        marginBottom: '4%',
        alignItems: 'center',
      }}>
      <Checkbox
        status={taskCheck ? 'checked' : 'unchecked'}
        color={Colors.textAccent}
        onPress={() => setTaskCheck(!taskCheck)}
      />
      <TextInput
        style={{backgroundColor: Colors.backgroundDark, flex: 1}}
        textColor={Colors.textPrimary}
        outlineColor=""
        value={value}
        dense={true}
        onChangeText={value => setValue(value)}
        outlineStyle={{borderRadius: 0, borderWidth: 0}}
        activeOutlineColor={Colors.backgroundDark}
        activeUnderlineColor={Colors.backgroundDark}
        underlineColor={Colors.backgroundDark}
      />
    </View>
  );
};

export default TaskComponent;
