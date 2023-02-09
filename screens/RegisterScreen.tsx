import React, {useEffect, useRef} from 'react';
import {Animated, SafeAreaView, ScrollView, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {Input} from '../components/InputComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../style/Colors';
import {Fonts} from '../style/Fonts';

//TODO: figure out how to do animation on this page since it's the bottom of the stack
export function RegisterScreen({navigation}: {navigation: any}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => fadeIn());
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.backgroundDarkest,
      }}>
      <ScrollView>
        <View
          style={{
            paddingTop: '20%',
            borderBottomWidth: 1,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: Colors.backgroundAccentDark,
            marginBottom: '4%',
          }}>
          <Text
            variant="displayLarge"
            style={{
              color: Colors.textDark,
              marginBottom: '4%',
              marginLeft: '2%',
              fontFamily: Fonts.TextBold,
            }}>
            Welcome
          </Text>
        </View>
        <View style={{paddingHorizontal: '4%'}}>
          <Text
            variant="displaySmall"
            style={{
              color: Colors.textPrimary,
              marginBottom: '4%',
              fontFamily: 'Roboto-Medium',
            }}>
            Register
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignSelf: 'center',
            }}>
            <Input
              label="First Name"
              iconName="account-outline"
              placeholder="First name"
              width="46%"
            />
            <Input
              label="Last Name"
              iconName="account-outline"
              placeholder="Last name"
              width="46%"
              marginLeft="2%"
            />
          </View>
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
                color={Colors.textPrimary}
              />
            )}
            mode="contained"
            style={{
              backgroundColor: Colors.backgroundDark,
              borderColor: Colors.backgroundLight,
              borderWidth: 1,
              marginTop: '2%',
              width: '54%',
              alignSelf: 'center',
              borderRadius: 4,
              justifyContent: 'center',
              marginBottom: '4%',
            }}
            labelStyle={{
              color: Colors.textPrimary,
              fontSize: 20,
              alignSelf: 'center',
              marginTop: '8%',
              fontFamily: Fonts.TextNormal,
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
              style={{
                fontFamily: Fonts.TextLight,
                color: Colors.textPrimary,
                textAlign: 'center',
              }}>
              Already have an account?
            </Text>
            <Button
              mode="text"
              style={{marginTop: '1%'}}
              onPress={() => navigation.replace('LoginScreen')}>
              <Text
                variant="titleMedium"
                style={{
                  color: Colors.textAccent,
                  fontFamily: Fonts.TextNormal,
                }}>
                Sign in
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
