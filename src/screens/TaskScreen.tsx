import React, {useCallback, useEffect, useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {
  Divider,
  FAB,
  SegmentedButtons,
  Text,
  TextInput,
} from 'react-native-paper';
import TaskComponent from '../components/TaskComponent';
import {supabase} from '../database/Supabase';
import {Colors} from '../style/Colors';
import {Fonts} from '../style/Fonts';

//TODO: LANDING PAGE, YO!
export default function TaskScreen() {
  const list = [] as any[];
  const [todoList, setTodoList] = useState<any | null>(list);
  const [value, setValue] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [ongoingTabActive, setOngoingActive] = useState(true);
  const [completedTabActive, setCompletedActive] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<any | null>(list);
  const [ongoingTasks, setOngoingTasks] = useState<any | null>(list);

  const addTaskToSupabase = async ({
    taskName,
    isComplete,
  }: {
    taskName: string;
    isComplete: boolean;
  }) => {
    const {data, error} = await supabase
      .from('TodoList')
      .insert([{taskName: taskName, isComplete: isComplete}]);
  };

  //only runs once on mount
  useEffect(() => {
    getCompletedTasksFromSupabase().then(items => {
      items?.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
      setCompletedTasks(items);
      console.log(items?.map((item: any) => item.taskName));
    });
    getOngoingTasksFromSupabase().then(items => {
      items?.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
      setOngoingTasks(items);
      console.log(items?.map((item: any) => item.taskName));
    });
  }, []);

  //runs every time it's called
  const getAndUpdateTasksFromSupabase = useCallback(async () => {
    getCompletedTasksFromSupabase().then(items => {
      items?.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
      setCompletedTasks(items);
    });
    getOngoingTasksFromSupabase().then(items => {
      items?.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
      setOngoingTasks(items);
    });
    console.log('USECALLBACK');
  }, []);

  //delete task from supabase and update the list
  const deleteTaskFromSupabase = async (id: number) => {
    const {data, error} = await supabase.from('TodoList').delete().eq('id', id);
    getAndUpdateTasksFromSupabase();
  };

  const getCompletedTasksFromSupabase = async () => {
    let {data: TodoList, error} = await supabase
      .from('TodoList')
      .select('*')
      .eq('isComplete', true);
    return TodoList;
  };

  // const setCompletedTasksFromSupabase = useCallback(async () => {
  //   getCompletedTasksFromSupabase().then(items => {
  //     items?.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
  //     setCompletedTasks(items);
  //   });
  //   console.log('USECALLBACK COMPLETED');
  // }, []);

  const getOngoingTasksFromSupabase = async () => {
    let {data: TodoList, error} = await supabase
      .from('TodoList')
      .select('*')
      .eq('isComplete', false);
    return TodoList;
  };

  // const setOngoingTasksFromSupabase = useCallback(async () => {
  //   getOngoingTasksFromSupabase().then(items => {
  //     items?.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
  //     setOngoingTasks(items);
  //   });
  //   console.log('USECALLBACK ONGOING');
  // }, []);

  const updateTaskCheckFromSupabase = async ({
    id,
    isComplete,
  }: {
    id: number;
    isComplete: boolean;
  }) => {
    const {data, error} = await supabase
      .from('TodoList')
      .update({isComplete: !isComplete})
      .eq('id', id);

    getAndUpdateTasksFromSupabase();
  };

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
          justifyContent: 'center',
          alignItems: 'center',
          height: 38,
          width: '96%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          alignSelf: 'center',
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
      {/* <View
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
      </View> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginBottom: '30%',
            paddingVertical: '4%',
          }}>
          {ongoingTasks.length === 0 ? (
            <Text
              style={{
                marginTop: '70%',
                color: Colors.textGrey,
                alignSelf: 'center',
                fontSize: 30,
                fontFamily: Fonts.TextLight,
              }}>
              No tasks yet!
            </Text>
          ) : // todoList.map(
          //   (item: {taskName: string; isComplete: boolean; id: number}) => {
          //     if (item.taskName !== '') {
          //       return (
          //         <TaskComponent
          //           key={item.id}
          //           taskName={item.taskName}
          //           isComplete={item.isComplete}
          //           taskID={item.id}
          //           deleteTask={() => deleteTaskFromSupabase(item.id)}
          //         />
          //       );
          //     }
          //   },
          // )
          ongoingTabActive ? (
            ongoingTasks.map(
              (item: {taskName: string; isComplete: boolean; id: number}) => {
                if (item.taskName !== '') {
                  return (
                    <TaskComponent
                      key={item.id}
                      taskName={item.taskName}
                      isComplete={item.isComplete}
                      taskID={item.id}
                      deleteTask={() => deleteTaskFromSupabase(item.id)}
                      updateTask={(id, isComplete) =>
                        updateTaskCheckFromSupabase({
                          id: item.id,
                          isComplete: item.isComplete,
                        })
                      }
                    />
                  );
                }
              },
            )
          ) : (
            completedTasks.map(
              (item: {taskName: string; isComplete: boolean; id: number}) => {
                if (item.taskName !== '') {
                  return (
                    <TaskComponent
                      key={item.id}
                      taskName={item.taskName}
                      isComplete={item.isComplete}
                      taskID={item.id}
                      deleteTask={() => deleteTaskFromSupabase(item.id)}
                      updateTask={(id, isComplete) =>
                        updateTaskCheckFromSupabase({
                          id: item.id,
                          isComplete: item.isComplete,
                        })
                      }
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
            marginLeft: '2%',
          }}
          color={Colors.textDark}
          onPress={() => {
            if (value) {
              // addTask(value, false);
              addTaskToSupabase({taskName: value, isComplete: isComplete});
              getAndUpdateTasksFromSupabase();
              Keyboard.dismiss();
              setValue('');
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}
