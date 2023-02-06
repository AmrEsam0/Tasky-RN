import React, {useCallback, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {Colors} from '../style/Colors';
import CustomBackground from './CustomBackground';
import {Input} from './InputComponent';
import {TextInput} from 'react-native-paper';

type Props = {
  bottomSheetModalRef: any;
  handlePresentModal?: () => void;
};

const MyBottomSheet = (props: Props) => {
  const snapPoints = useMemo(() => ['50%'], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.8}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
      />
    ),
    [],
  );
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetModal
          backdropComponent={renderBackdrop}
          backgroundComponent={CustomBackground}
          ref={props.bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}>
          <View style={styles.contentContainer}>
            <Input label="" iconName="note-edit" placeholder="New Task" />
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: Colors.backgroundAccent,
    paddingHorizontal: '5%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '2%',
  },
});

export default MyBottomSheet;
