import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {Input} from '../components/InputComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../style/Colors';

type Props = {};

export const LoginScreen = (props: Props) => {
  return (
    // {
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.bacgroundLight,
      }}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: '10%',
          paddingHorizontal: '4%',
        }}>
        <Text
          variant="displayLarge"
          style={{color: Colors.accentDark, marginBottom: '12%'}}>
          Welcome Back!
        </Text>
        <Text
          variant="displaySmall"
          style={{color: Colors.accentDark, marginBottom: '8%'}}>
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
            password={true}
          />
        </View>
        <Button
          icon={() => (
            <Icon name="login-variant" size={24} color={Colors.textWhite} />
          )}
          mode="contained"
          style={{
            backgroundColor: Colors.accentPrimary,
            marginTop: '2%',
            width: '54%',
            alignSelf: 'center',
            borderRadius: 4,
            height: 50,
            justifyContent: 'center',
            marginBottom: '10%',
          }}
          labelStyle={{
            fontSize: 20,
            alignSelf: 'center',
            marginTop: '8%',
          }}>
          Login
        </Button>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            variant="titleMedium"
            style={{color: Colors.textPrimary, textAlign: 'center'}}>
            Forgot your password?
          </Text>
          <Button mode="text" style={{marginTop: '1%'}}>
            <Text
              variant="titleMedium"
              style={{
                color: Colors.accentPrimary,
                fontWeight: 'bold',
              }}>
              Reset Password
            </Text>
          </Button>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            variant="titleMedium"
            style={{color: Colors.textPrimary, textAlign: 'center'}}>
            Don't have an account?
          </Text>
          <Button mode="text" style={{marginTop: '1%'}}>
            <Text
              variant="titleMedium"
              style={{
                color: Colors.accentPrimary,
                fontWeight: 'bold',
              }}>
              Sign Up
            </Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
