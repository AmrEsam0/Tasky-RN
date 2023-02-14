import React, {useCallback, useEffect, useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {FAB, Text, TextInput} from 'react-native-paper';
import TaskComponent from '../components/TaskComponent';
import {Colors} from '../style/Colors';
import {Fonts} from '../style/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface todo {
  value: string;
  isComplete: boolean;
}

//TODO: LANDING PAGE, YO!
export default function TaskScreen() {
  const [todoList, setTodoList] = useState([{value: '', isComplete: false}]);
  const [value, setValue] = useState('');
  const [trigger, setTrigger] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [ongoingTabActive, setOngoingActive] = useState(true);
  const [completedTabActive, setCompletedActive] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([
    {value: '', isComplete: false},
  ]);
  const [ongoingTasks, setOngoingTasks] = useState({
    value: '',
    isComplete: false,
  });

  if (isFocused === false) {
    Keyboard.dismiss();
  }

  const addTask = (value: string) => {
    if (value !== '') {
      const newList = [...todoList, {value: value, isComplete: false}];
      setTodoList(newList);
      setValue('');
      storeData(newList);
    }
  };

  const deleteTask = (id: number) => {
    const newList = todoList.filter((item: any, index: number) => {
      return index !== id;
    });
    setTodoList(newList);
    storeData(newList);
  };

  const storeData = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('todoStorage', jsonValue);
      console.log('data saved');
    } catch (e) {
      // saving error
      console.log('error saving data => ', e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('todoStorage');
      if (jsonValue === null) {
        console.log('null data read');
      }
      console.log('data read');
      jsonValue != null
        ? console.log(JSON.parse(jsonValue))
        : console.log('null data read');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log('error reading data => ', e);
    }
  };

  useEffect(() => {
    // setTodoList(todoList);
    getData().then(data => {
      if (data !== null) {
        setTodoList(data);
      }
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.backgroundDarkest,
        paddingTop: '4%',
        paddingHorizontal: '4%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 38,
          width: '96%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          alignSelf: 'center',
          marginBottom: '4%',
        }}>
        <TouchableOpacity
          onPress={() => {
            setOngoingActive(true);
            setCompletedActive(false);
          }}
          style={{
            backgroundColor: ongoingTabActive
              ? Colors.backgroundLighter
              : Colors.backgroundTabDark,
            flex: 1,
            height: '100%',
            justifyContent: 'center',
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          <Text
            variant="bodyMedium"
            style={{
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: ongoingTabActive ? Fonts.TextBold : Fonts.TextLight,
              color: ongoingTabActive ? Colors.textDark : Colors.textPrimary,
            }}>
            Ongoing
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setOngoingActive(false);
            setCompletedActive(true);
          }}
          style={{
            backgroundColor: completedTabActive
              ? Colors.backgroundLighter
              : Colors.backgroundTabDark,
            flex: 1,
            marginLeft: '1%',
            height: '100%',
            justifyContent: 'center',
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Text
            variant="bodyMedium"
            style={{
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: completedTabActive ? Fonts.TextBold : Fonts.TextLight,
              color: completedTabActive ? Colors.textDark : Colors.textPrimary,
            }}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginBottom: '30%',
            paddingVertical: '4%',
          }}>
          {/* {ongoingTabActive ? (
            // ongoingTasks.length === 0 ? (
            todoList.length === 0 ? (
              <Text
                style={{
                  marginTop: '70%',
                  color: Colors.textGrey,
                  alignSelf: 'center',
                  fontSize: 30,
                  fontFamily: Fonts.TextLight,
                }}>
                Create a task!
              </Text>
            ) : (
              // ongoingTasks.map(
              todoList.map(
                (item: {taskName: string; isComplete: boolean; id: number}) => {
                  // if (item.taskName !== '') {
                  return (
                    <TaskComponent
                      key={item.id}
                      taskName={item.taskName}
                      isComplete={item.isComplete}
                      taskID={item.id}
                    />
                  );
                  // }
                },
              )
            )
          ) : // completedTasks.length === 0 ? (
          todoList.length === 0 ? (
            <Text
              style={{
                marginTop: '70%',
                color: Colors.textGrey,
                alignSelf: 'center',
                fontSize: 30,
                fontFamily: Fonts.TextLight,
              }}>
              No completed tasks yet!
            </Text>
          ) : (
            // completedTasks.map(
            todoList.map(
              (item: {taskName: string; isComplete: boolean; id: number}) => {
                if (item.taskName !== '') {
                  return (
                    <TaskComponent
                      key={item.id}
                      taskName={item.taskName}
                      isComplete={item.isComplete}
                      taskID={item.id}
                    />
                  );
                }
              },
            )
          )} */}
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
            todoList.map(
              (item: {isComplete: boolean; value: string}, index: number) => {
                if (item.value !== '') {
                  return (
                    <TaskComponent
                      key={index}
                      taskName={item.value}
                      isComplete={item.isComplete}
                      taskID={index}
                      deleteTask={() => {
                        deleteTask(index);
                      }}
                    />
                  );
                }
              },
            )
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
            backgroundColor: Colors.backgroundTabDark,
            flex: 1,
            borderTopEndRadius: 4,
            borderTopStartRadius: 4,
            borderBottomEndRadius: 4,
            borderBottomStartRadius: 4,
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
            marginLeft: '2%',
          }}
          color={Colors.textDark}
          onPress={() => {
            if (value) {
              addTask(value);

              Keyboard.dismiss();
              // setValue('');
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}
