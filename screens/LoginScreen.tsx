import React, {useEffect, useRef} from 'react';
import {SafeAreaView, ScrollView, View, Animated} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {Input} from '../components/InputComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../style/Colors';
import {Fonts} from '../style/Fonts';

//TODO: extract components here and in RegisterScreen
export function LoginScreen({navigation}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
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
        backgroundColor: Colors.backgroundDark,
      }}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: '10%',
          paddingHorizontal: '4%',
        }}>
        <Animated.View style={{opacity: fadeAnim}}>
          <Text
            variant="displayLarge"
            style={{
              color: Colors.textPrimary,
              marginBottom: '12%',
              fontFamily: Fonts.TextBold,
            }}>
            Welcome Back!
          </Text>
        </Animated.View>
        <Text
          variant="displaySmall"
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
            style={{
              fontFamily: Fonts.TextNormal,
              color: Colors.textPrimary,
              textAlign: 'center',
            }}>
            Forgot your password?
          </Text>
          <Button mode="text" style={{marginTop: '1%'}}>
            <Text
              variant="titleMedium"
              style={{
                color: Colors.accentPrimary,
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
            variant="titleMedium"
            style={{
              color: Colors.textPrimary,
              textAlign: 'center',
              fontFamily: Fonts.TextNormal,
            }}>
            Don't have an account?
          </Text>
          <Button
            mode="text"
            style={{marginTop: '1%'}}
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text
              variant="titleMedium"
              style={{
                color: Colors.accentPrimary,
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
