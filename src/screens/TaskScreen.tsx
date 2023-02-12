import {getStateFromPath} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, SafeAreaView, View, Keyboard} from 'react-native';
import {FAB, Text, TextInput} from 'react-native-paper';
import TaskComponent from '../components/TaskComponent';
import {supabase} from '../database/Supabase';
import {Colors} from '../style/Colors';
import {Fonts} from '../style/Fonts';

//TODO: LANDING PAGE, YO!
export default function TaskScreen() {
  const list = [] as any[];
  const [todoList, setTodoList] = useState<any | null>(list);
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const getTasksFromSupabase = async () => {
    let {data: TodoList, error} = await supabase.from('TodoList').select('*');
    return TodoList;
  };

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
    getTasksFromSupabase().then(items => {
      items?.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
      setTodoList(items);
      console.log(items?.map((item: any) => item.taskName));
    });
  }, []);

  //runs every time it's called
  const getAndUpdateTasksFromSupabase = useCallback(async () => {
    getTasksFromSupabase().then(items => {
      items?.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
      setTodoList(items);
    });
  }, []);

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
            todoList.map(
              (item: {taskName: string; isComplete: boolean; id: number}) => {
                if (item.taskName !== '') {
                  return (
                    <TaskComponent
                      key={item.id}
                      taskName={item.taskName}
                      isComplete={item.isComplete}
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
            borderRadius: 4,
            marginLeft: '2%',
          }}
          color={Colors.textDark}
          onPress={() => {
            if (value) {
              // addTask(value, false);
              addTaskToSupabase({taskName: value, isComplete: false});
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
