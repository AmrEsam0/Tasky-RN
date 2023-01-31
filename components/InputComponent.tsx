import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import TextInputAffix from 'react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputAffix';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
export const Input = (props: Props) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [inputText, setInputText] = React.useState('');
  return (
    <View style={{marginBottom: 22}}>
      <Text variant="labelLarge" style={{color: '#fff', marginBottom: 2}}>
        {props.label}
      </Text>
      <TextInput
        keyboardType={props.keyboardType}
        value={inputText}
        placeholder={isFocused ? '' : props.placeholder}
        mode="outlined"
        autoCorrect={false}
        onChangeText={inputText => setInputText(inputText)}
        placeholderTextColor="#252525A4"
        style={{backgroundColor: '#EDEDED'}}
        onFocus={() => {
          props.onFocus;
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        left={
          <TextInput.Icon
            icon={props.iconName}
            iconColor={isFocused ? '#3C0FA6' : '#2A0C6F6F'}
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
