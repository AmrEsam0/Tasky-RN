import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, SafeAreaView, View, Keyboard} from 'react-native';
import {FAB, Text, TextInput} from 'react-native-paper';
import TaskComponent from '../components/TaskComponent';

import {Colors} from '../style/Colors';
import {Fonts} from '../style/Fonts';

//TODO: LANDING PAGE, YO!
export default function TaskScreen() {
  const list = [
    {value: 'Task 1', isComplete: false},
    {value: 'Task 2', isComplete: true},
  ];
  const [todoList, setTodoList] = useState(list);
  const [value, setValue] = useState('');
  // const [taskDone, setTaskDone] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setTodoList(list);
  }, []);

  const addTask = (value: string, isComplete: boolean) => {
    setTodoList([...todoList, {value, isComplete}]);
    setValue('');
    setIsFocused(false);
  };
  if (isFocused === false) {
    Keyboard.dismiss();
  }

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.backgroundDarkest,
        paddingTop: '10%',
        paddingHorizontal: '4%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '4%',
        }}>
        <Text
          variant="headlineLarge"
          style={{
            color: Colors.textPrimary,
            paddingRight: '6%',
            fontFamily: Fonts.TextMedium,
          }}>
          Tasky
        </Text>
        <View
          style={{
            height: 1,
            flex: 1,
            backgroundColor: Colors.backgroundAccent,
          }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginBottom: '30%',
            paddingVertical: '4%',
          }}>
          {todoList.length === 0 ? (
            <Text
              style={{
                marginTop: '50%',
                color: Colors.textGrey,
                alignSelf: 'center',
                fontSize: 30,
                fontFamily: Fonts.TextLight,
              }}>
              No tasks yet!
            </Text>
          ) : (
            todoList.map((item, index) => {
              if (item.value !== '') {
                return (
                  <TaskComponent
                    key={index}
                    taskName={item.value}
                    isComplete={item.isComplete}
                  />
                );
              }
            })
          )}
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: '4%',
          flex: 1,
          paddingVertical: '2%',
          alignSelf: 'center',
          alignContent: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TextInput
          style={{
            backgroundColor: Colors.backgroundDark,
            flex: 1,
            borderTopEndRadius: 4,
            borderTopStartRadius: 4,
            borderBottomEndRadius: 4,
            borderBottomStartRadius: 4,
            borderColor: Colors.backgroundAccentDark,
            borderWidth: 1,
          }}
          textColor={Colors.textPrimary}
          outlineColor=""
          value={value}
          onChangeText={value => setValue(value)}
          activeOutlineColor={Colors.backgroundDark}
          activeUnderlineColor={Colors.backgroundDark}
          underlineStyle={{height: 0}}
          cursorColor={Colors.textAccent}
          selectionColor={Colors.textGrey}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <FAB
          icon={isFocused ? 'check' : 'plus'}
          animated={true}
          style={{
            backgroundColor: Colors.backgroundAccentDark,
            borderRadius: 4,
            marginLeft: '2%',
          }}
          color={Colors.textDark}
          onPress={() => {
            addTask(value, false);
          }}
        />
      </View>
    </SafeAreaView>
  );
}
