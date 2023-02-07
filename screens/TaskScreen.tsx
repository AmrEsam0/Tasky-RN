import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {useRef, useState} from 'react';
import {ScrollView, SafeAreaView, View} from 'react-native';
import {Text} from 'react-native-ui-lib';
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
          marginBottom: '10%',
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
            backgroundColor: Colors.backgroundLight,
          }}
        />
      </View>
      <ScrollView>
        <TaskComponent />
        <TaskComponent />
        <TaskComponent />
      </ScrollView>

      {/* <FAB
        icon="plus"
        style={{
          position: 'absolute',
          bottom: '4%',
          alignSelf: 'center',
          backgroundColor: Colors.backgroundAccent,
        }}
        label="New Task"
        color={Colors.textPrimary}
        onPress={() => handlePresentModal()}
      /> */}
      <MyBottomSheet bottomSheetModalRef={bottomSheetModalRef} />
    </SafeAreaView>
  );
}
