import React, {useEffect, useRef} from 'react';
import {SafeAreaView, ScrollView, View, Animated} from 'react-native';
import {Input} from '../components/InputComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../style/Colors';
import {Fonts} from '../style/Fonts';
import {Button, Text} from 'react-native-ui-lib';

//TODO: extract components here and in RegisterScreen
export function LoginScreen({navigation}: {navigation: any}) {
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
    // {
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.backgroundDarkest,
      }}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: '10%',
          paddingHorizontal: '4%',
        }}>
        <Animated.View style={{opacity: fadeAnim}}>
          <Text
            style={{
              color: Colors.textPrimary,
              marginBottom: '12%',
              fontFamily: Fonts.TextBold,
            }}>
            Welcome Back!
          </Text>
        </Animated.View>
        <Text
          style={{
            color: Colors.textPrimary,
            marginBottom: '8%',
            fontFamily: Fonts.TextMedium,
          }}>
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
          backgroundColor={Colors.backgroundAccent}
          labelStyle={{color: Colors.textPrimary}}
          label="Login"
        />

        {/* <Button
          icon={() => (
            <Icon name="login-variant" size={24} color={Colors.textDark} />
          )}
          mode="contained"
          style={{
            backgroundColor: Colors.backgroundLight,
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
            fontFamily: Fonts.TextMedium,
            color: Colors.textDark,
          }}
          onPress={() => navigation.navigate('TaskScreen')}>
          Login
        </Button> */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: Fonts.TextNormal,
              color: Colors.textPrimary,
              textAlign: 'center',
            }}>
            Forgot your password?
          </Text>
          <Button style={{marginTop: '1%'}}>
            <Text
              style={{
                color: Colors.textAccent,
                fontFamily: Fonts.TextBold,
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
            style={{
              color: Colors.textPrimary,
              textAlign: 'center',
              fontFamily: Fonts.TextNormal,
            }}>
            Don't have an account?
          </Text>
          <Button
            style={{marginTop: '1%'}}
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text
              style={{
                color: Colors.textAccent,
                fontFamily: Fonts.TextBold,
              }}>
              Sign Up
            </Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
