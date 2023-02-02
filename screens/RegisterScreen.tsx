import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {Input} from '../components/InputComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../style/Colors';

export function RegisterScreen({navigation}) {
  return (
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
          style={{color: Colors.accentDark, marginBottom: '6%'}}>
          Welcome
        </Text>
        <Text
          variant="displaySmall"
          style={{color: Colors.accentDark, marginBottom: '4%'}}>
          Register
        </Text>
        <Input
          label="First Name"
          iconName="account-outline"
          placeholder="Enter your first name"
        />
        <Input
          label="Last Name"
          iconName="account-outline"
          placeholder="Enter your last name"
        />
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
        <Input
          label="Confirm Password"
          iconName="lock-outline"
          placeholder="Enter your password again"
          password={true}
        />
        <Button
          icon={() => (
            <Icon
              name="account-check-outline"
              size={24}
              color={Colors.textWhite}
            />
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
            marginBottom: '4%',
          }}
          labelStyle={{
            fontSize: 20,
            alignSelf: 'center',
            marginTop: '8%',
          }}>
          Register
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
            Already have an account?
          </Text>
          <Button
            mode="text"
            style={{marginTop: '1%'}}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text
              variant="titleMedium"
              style={{
                color: Colors.accentPrimary,
                fontWeight: 'bold',
              }}>
              Sign in
            </Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
