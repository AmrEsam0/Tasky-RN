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
        backgroundColor: Colors.backgroundDarkest,
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
        style={{backgroundColor: Colors.backgroundDarkest, flex: 1}}
        textColor={Colors.textPrimary}
        outlineColor=""
        value={value}
        dense={true}
        onChangeText={value => setValue(value)}
        outlineStyle={{borderRadius: 0, borderWidth: 0}}
        activeOutlineColor={Colors.backgroundDarkest}
        activeUnderlineColor={Colors.backgroundDarkest}
        underlineColor={Colors.backgroundDarkest}
      />
    </View>
  );
};

export default TaskComponent;
