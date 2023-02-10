import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {useRef, useState} from 'react';
import {ScrollView, SafeAreaView, View} from 'react-native';
import {FAB, Text} from 'react-native-paper';
import MyBottomSheet from '../components/BottomSheetComponent';
import TaskComponent from '../components/TaskComponent';

import {Colors} from '../style/Colors';
import {Fonts} from '../style/Fonts';

//TODO: LANDING PAGE, YO!
export default function TaskScreen() {
  const [clicked, setClicked] = useState(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present();
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
          Tasks
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
          <TaskComponent />
          <TaskComponent />
          <TaskComponent />
        </View>
      </ScrollView>

      <FAB
        icon="plus"
        style={{
          position: 'absolute',
          bottom: '4%',
          alignSelf: 'center',
          backgroundColor: Colors.backgroundAccentDark,
        }}
        label="New Task"
        color={Colors.textDark}
        onPress={() => handlePresentModal()}
      />
      <MyBottomSheet bottomSheetModalRef={bottomSheetModalRef} />
    </SafeAreaView>
  );
}
