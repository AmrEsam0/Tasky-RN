import React from 'react';
import {View} from 'react-native';
import {Incubator, Text, TextField} from 'react-native-ui-lib';
import {Colors} from '../style/Colors';
import {Fonts} from '../style/Fonts';

type Props = {
  label: string;
  iconName: string;
  password?: boolean;
  fontFamily?: string;
  onFocus?: () => void;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  placeholder?: string;
};

// TODO: move styles down to the bottom of the file
// TODO: move all styles to a separate file??
export const Input = (props: Props) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [inputText, setInputText] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View style={{marginBottom: '4%', width: '96%', alignSelf: 'center'}}>
      <Text
        variant="labelLarge"
        style={{fontFamily: Fonts.TextNormal, color: Colors.textPrimary}}>
        {props.label}
      </Text>
      <Incubator.TextField
        keyboardType={props.keyboardType}
        value={inputText}
        placeholder={isFocused ? '' : props.placeholder}
        mode="outlined"
        autoCorrect={false}
        onChangeText={(inputText: React.SetStateAction<string>) =>
          setInputText(inputText)
        }
        placeholderTextColor={Colors.textGrey}
        textColor={Colors.textPrimary}
        style={{backgroundColor: Colors.backgroundDarkest}}
        activeOutlineColor={Colors.textAccent}
        secureTextEntry={showPassword ? false : props.password}
        onFocus={() => {
          props.onFocus;
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        // left={
        //   <TextInput.Icon
        //     icon={props.iconName}
        //     iconColor={isFocused ? Colors.textPrimary : Colors.textGrey}
        //     onFocus={() => {
        //       props.onFocus;
        //       setIsFocused(true);
        //     }}
        //     onBlur={() => setIsFocused(false)}
        //   />
        // }
        // right={
        //   props.password && (
        //     <TextInput.Icon
        //       forceTextInputFocus={false}
        //       iconColor={Colors.textGrey}
        //       icon={showPassword ? 'eye' : 'eye-off'}
        //       onPress={() => {
        //         setShowPassword(!showPassword);
        //       }}
        //     />
        //   )
        // }
      />
    </View>
  );
};
