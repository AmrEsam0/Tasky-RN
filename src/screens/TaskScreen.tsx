import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  Keyboard,
  TouchableOpacity,
  TextInput as RNTextInput,
} from 'react-native';
import {Badge, FAB, Text, TextInput} from 'react-native-paper';
import TaskComponent from '../components/TaskComponent';
import {Colors} from '../style/Colors';
import {Fonts} from '../style/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface todo {
  value: string;
  isComplete: boolean;
}

//TODO: LANDING PAGE, YO!
//TODO: R E F A C T O R, T H I S I S  A  M E S S
export default function TaskScreen() {
  const [todoList, setTodoList] = useState<
    {
      value: string;
      isComplete: boolean;
      id: number;
    }[]
  >([]);
  const [value, setValue] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [ongoingTabActive, setOngoingActive] = useState(true);
  const [completedTabActive, setCompletedActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskID, setEditingTaskID] = useState(0);
  const [emptyTaskValueTrigger, setEmptyTaskValueTrigger] = useState(false);

  let textInputRef = React.createRef<RNTextInput>();

  const getRandomID = () => {
    return Math.floor(Math.random() * 1000);
  };

  // const dataRefresher = useCallback(() => {
  //   // setTodoList(todoList);
  //   getData().then(data => {
  //     if (data !== null) {
  //       setTodoList(data);
  //     }
  //   });
  // }, []);

  const addTask = (value: string, isComplete: boolean, id: number) => {
    if (value !== '') {
      const newList = [
        ...todoList,
        {value: value, isComplete: isComplete, id: id},
      ];
      // const newList = [{value: 'asd', isComplete: false, id: 0}];
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

  const updateTaskCheckValue = (id: number, isComplete: boolean) => {
    const newList = todoList.map((item: any, index: number) => {
      if (index === id) {
        return {...item, isComplete: !isComplete};
      }
      return item;
    });
    setTodoList(newList);
    storeData(newList);
  };

  const updateTaskTextValue = (id: number, value: string) => {
    const newList = todoList.map((item: any, index: number) => {
      if (index === id) {
        textInputRef.current?.focus();
        setValue(value);
        setIsEditing(true);
        setEditingTaskID(id);

        setIsFocused(true);
        return {...item, value: value};
      }
      return item;
    });
    setTodoList(newList);
    storeData(newList);
    setIsFocused(false);
  };

  const storeData = async (value: any) => {
    try {
      //map over the list and delete all tasks that have empty values
      const filteredList = value.filter((item: any) => {
        return item.value !== '';
      });
      if (filteredList.length === 0) {
        setEmptyTaskValueTrigger(true);
      }

      const jsonValue = JSON.stringify(filteredList);
      await AsyncStorage.setItem('todoStorage', jsonValue);
      console.log('data saved');
      emptyTaskValueTrigger === true ? setEmptyTaskValueTrigger(false) : null;
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

  //count how many tasks are completed
  const countCompletedTasks = () => {
    let count = 0;
    todoList.forEach((item: any) => {
      if (item.isComplete === true) {
        count++;
      }
    });
    return count;
  };

  //count how many tasks are ongoing
  const countOngoingTasks = () => {
    let count = 0;
    todoList.forEach((item: any) => {
      if (item.isComplete === false) {
        count++;
      }
    });
    return count;
  };

  //hard reset
  // useEffect(() => {
  //   setTodoList([]);
  //   storeData([]);
  // }, []);

  //better rerender twice than not at all or all the time :D
  useEffect(() => {
    getData().then(data => {
      if (data !== null) {
        setTodoList(data);
      }
    });
  }, [emptyTaskValueTrigger]);

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
          <Badge
            visible={countOngoingTasks() > 0 ? true : false}
            style={{
              position: 'absolute',
              right: '5%',
              backgroundColor: ongoingTabActive
                ? Colors.backgroundAccent
                : Colors.backgroundLight,
              color: ongoingTabActive ? Colors.textDark : Colors.textDark,
              fontSize: 10,
              width: 20,
              height: 20,
              borderRadius: 10,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            {countOngoingTasks()}
          </Badge>
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
          <Badge
            visible={countCompletedTasks() > 0 ? true : false}
            style={{
              position: 'absolute',
              left: '5%',
              backgroundColor: completedTabActive
                ? Colors.backgroundAccent
                : Colors.backgroundLight,
              color: completedTabActive ? Colors.textDark : Colors.textDark,
              fontSize: 10,
              width: 20,
              height: 20,
              borderRadius: 10,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            {countCompletedTasks()}
          </Badge>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginBottom: '30%',
            paddingVertical: '4%',
          }}>
          {ongoingTabActive ? (
            countOngoingTasks() === 0 ? (
              <Text
                style={{
                  marginTop: '70%',
                  color: Colors.textGrey,
                  alignSelf: 'center',
                  fontSize: 30,
                  fontFamily: Fonts.TextLight,
                }}>
                No ongoing tasks!
              </Text>
            ) : (
              todoList.map(
                (item: {isComplete: boolean; value: string}, index: number) => {
                  if (item.value !== '' && item.isComplete === false) {
                    return (
                      <TaskComponent
                        key={index}
                        taskName={item.value}
                        isComplete={item.isComplete}
                        taskID={index}
                        updateTask={() => {
                          updateTaskCheckValue(index, item.isComplete);
                        }}
                        deleteTask={() => {
                          deleteTask(index);
                        }}
                        updateTaskText={(id: number, value: string) => {
                          updateTaskTextValue(index, value);
                        }}
                      />
                    );
                  }
                },
              )
            )
          ) : countCompletedTasks() === 0 ? (
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
            todoList.map(
              (item: {isComplete: boolean; value: string}, index: number) => {
                if (item.value !== '' && item.isComplete === true) {
                  return (
                    <TaskComponent
                      key={index}
                      taskName={item.value}
                      isComplete={item.isComplete}
                      taskID={index}
                      updateTask={() => {
                        updateTaskCheckValue(index, item.isComplete);
                      }}
                      deleteTask={() => {
                        deleteTask(index);
                      }}
                      updateTaskText={(id: number, value: string) => {
                        updateTaskTextValue(index, value);
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
          placeholder="Add a task"
          placeholderTextColor={Colors.textGrey}
          ref={textInputRef}
        />
        <FAB
          icon={isFocused || value ? 'check' : 'plus'}
          animated={true}
          style={{
            backgroundColor: Colors.backgroundAccentDark,
            marginLeft: '2%',
          }}
          color={Colors.textDark}
          onPress={() => {
            if (isEditing) {
              updateTaskTextValue(editingTaskID, value);
              Keyboard.dismiss();
              setIsEditing(false);
              setValue('');
            } else if (value) {
              const taskID = getRandomID();
              addTask(value, isComplete, taskID);
              setIsFocused(false);
              Keyboard.dismiss();
            } else {
              textInputRef.current?.focus();
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}
