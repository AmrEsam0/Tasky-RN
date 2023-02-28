import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  Keyboard,
  TextInput as RNTextInput,
} from 'react-native';
import {FAB, TextInput} from 'react-native-paper';
import TaskComponent from '../../components/TaskComponent';
import {Colors} from '../../style/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './styles';
import {PressableTab} from '../../components/PressableTab';
import {EmptyListText} from '../../components/EmptyListText';

interface todo {
  value: string;
  isComplete: boolean;
}

//TODO: LANDING PAGE, YO!
//TODO: R E F A C T O R, T H I S  I S  A  M E S S
export default function HomeScreen() {
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
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.tabView}>
        <PressableTab
          onPressLeft={() => {
            setOngoingActive(true);
            setCompletedActive(false);
          }}
          onPressRight={() => {
            setOngoingActive(false);
            setCompletedActive(true);
          }}
          leftTab={true}
          ongoingTabActive={ongoingTabActive}
          completedTabActive={completedTabActive}
          onGoingTasksCount={countOngoingTasks()}
          completedTasksCount={countCompletedTasks()}
        />
        <PressableTab
          onPressLeft={() => {
            setOngoingActive(true);
            setCompletedActive(false);
          }}
          onPressRight={() => {
            setOngoingActive(false);
            setCompletedActive(true);
          }}
          leftTab={false}
          ongoingTabActive={ongoingTabActive}
          completedTabActive={completedTabActive}
          onGoingTasksCount={countOngoingTasks()}
          completedTasksCount={countCompletedTasks()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginBottom: '30%',
            paddingVertical: '4%',
          }}>
          {ongoingTabActive ? (
            countOngoingTasks() === 0 ? (
              <EmptyListText text="No ongoing tasks!" />
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
            <EmptyListText text="No completed tasks yet!" />
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
      <View style={styles.bottomView}>
        <TextInput
          style={styles.inputField}
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
          style={styles.FAB}
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
