import React, {useState} from 'react';
import {View} from 'react-native';
import {Checkbox, Incubator} from 'react-native-ui-lib';
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
      <Incubator.TextField
        style={{backgroundColor: Colors.backgroundDarkest, flex: 1}}
        textColor={Colors.textPrimary}
        outlineColor=""
        value={value}
        dense={true}
        onChangeText={(value: React.SetStateAction<string>) => setValue(value)}
        outlineStyle={{borderRadius: 0, borderWidth: 0}}
        activeOutlineColor={Colors.backgroundDarkest}
        activeUnderlineColor={Colors.backgroundDarkest}
        underlineColor={Colors.backgroundDarkest}
      />
    </View>
  );
};

export default TaskComponent;
