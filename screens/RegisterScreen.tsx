import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {Input} from '../components/InputComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../style/Colors';
import {Fonts} from '../style/Fonts';

//TODO: figure out how to do animation on this page since it's the bottom of the stack
export function RegisterScreen({navigation}) {
  // const fadeAnim = useRef(new Animated.Value(0)).current;
  // const fadeIn = () => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 1300,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // useEffect(() => fadeIn());
  return (
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
        {/* <Animated.View style={{opacity: fadeAnim}}> */}
        <Text
          variant="displayLarge"
          style={{
            color: Colors.textPrimary,
            marginBottom: '6%',
            fontFamily: Fonts.TextBold,
          }}>
          Welcome
        </Text>
        {/* </Animated.View> */}
        <Text
          variant="displaySmall"
          style={{
            color: Colors.textPrimary,
            marginBottom: '4%',
            fontFamily: 'Roboto-Medium',
          }}>
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
              color={Colors.textDark}
            />
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
            marginBottom: '4%',
          }}
          labelStyle={{
            color: Colors.textDark,
            fontSize: 20,
            alignSelf: 'center',
            marginTop: '8%',
            fontFamily: Fonts.TextMedium,
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
              fontFamily: Fonts.TextNormal,
              color: Colors.textPrimary,
              textAlign: 'center',
            }}>
            Already have an account?
          </Text>
          <Button
            mode="text"
            style={{marginTop: '1%'}}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text
              variant="titleMedium"
              style={{
                color: Colors.textAccent,
                fontFamily: Fonts.TextBold,
              }}>
              Sign in
            </Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
