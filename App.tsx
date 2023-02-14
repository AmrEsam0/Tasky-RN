import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from './src/style/Colors';
import {LoginScreen} from './src/screens/LoginScreen';
import {RegisterScreen} from './src/screens/RegisterScreen';
import TaskScreen from './src/screens/TaskScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="TaskScreen"
          screenOptions={({route}) => ({
            headerShown: false,
            statusBarColor:
              route.name === 'RegisterScreen'
                ? Colors.backgroundAccentDark
                : Colors.backgroundDarkest,
            statusBarStyle: 'light',
            animation: 'fade_from_bottom',
          })}>
          <Stack.Screen name="TaskScreen" component={TaskScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
