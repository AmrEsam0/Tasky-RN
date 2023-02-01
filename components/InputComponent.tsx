import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import TextInputAffix from 'react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputAffix';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../style/Colors';

type Props = {
  label: string;
  iconName: string;
  // password?: boolean;
  onFocus?: () => void;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  placeholder?: string;
};

// TODO: move styles down to the bottom of the file
// TODO: move all styles to a separate file??
// TODO: add the eye icon to the password input
export const Input = (props: Props) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [inputText, setInputText] = React.useState('');
  return (
    <View style={{marginBottom: '8%'}}>
      <Text variant="labelLarge" style={{color: Colors.textPrimary}}>
        {props.label}
      </Text>
      <TextInput
        keyboardType={props.keyboardType}
        value={inputText}
        placeholder={isFocused ? '' : props.placeholder}
        mode="outlined"
        autoCorrect={false}
        onChangeText={inputText => setInputText(inputText)}
        placeholderTextColor={Colors.textAccented}
        style={{backgroundColor: Colors.backgroundAccented}}
        onFocus={() => {
          props.onFocus;
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        left={
          <TextInput.Icon
            icon={props.iconName}
            iconColor={isFocused ? Colors.accentDark : Colors.textAccented}
            onFocus={() => {
              props.onFocus;
              setIsFocused(true);
            }}
            onBlur={() => setIsFocused(false)}
          />
        }
      />
    </View>
  );
};
