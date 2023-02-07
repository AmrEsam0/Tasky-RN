import React, {useMemo} from 'react';
import {BottomSheetBackgroundProps} from '@gorhom/bottom-sheet';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated';
import {Colors} from '../style/Colors';

const CustomBackground: React.FC<BottomSheetBackgroundProps> = ({
  style,
  animatedIndex,
}) => {
  //#region styles
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    // @ts-ignore
    backgroundColor: interpolateColor(
      animatedIndex.value,
      [-1, 0],
      [Colors.backgroundDarkest, Colors.backgroundDarkest],
    ),
    borderRadius: 20,
  }));
  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style, containerAnimatedStyle],
  );
  //#endregion

  // render
  return <Animated.View pointerEvents="none" style={containerStyle} />;
};

export default CustomBackground;
