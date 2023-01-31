import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '../components/InputComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};

export const LoginScreen = (props: Props) => {
  return (
    // {backgroundColor: '#252525'
    <LinearGradient
      colors={['#1706405F', '#23003345']}
      style={{width: '100%', height: '100%'}}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 40,
          paddingHorizontal: 20,
        }}>
        <Text variant="displayLarge" style={{color: '#fff', marginBottom: 60}}>
          Login
        </Text>
        <View>
          <Input
            label="Email"
            iconName="email-outline"
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <Input
            label="Password"
            iconName="lock-outline"
            placeholder="Enter your password"
          />
        </View>
        <Button
          icon={() => <Icon name="login-variant" size={24} color="#fff" />}
          mode="contained"
          style={{
            marginTop: 20,
            width: '70%',
            alignSelf: 'center',
            borderRadius: 4,
            height: 50,
            justifyContent: 'center',
          }}
          labelStyle={{
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 14,
          }}>
          Login
        </Button>
      </ScrollView>
    </LinearGradient>
  );
};
