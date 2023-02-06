import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from './style/Colors';
import {LoginScreen} from './screens/LoginScreen';
import {RegisterScreen} from './screens/RegisterScreen';
import TaskScreen from './screens/TaskScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
            statusBarColor: Colors.backgroundDarkest,
            statusBarStyle: 'light',
            animation: 'fade_from_bottom',
          }}>
          <Stack.Screen name="TaskScreen" component={TaskScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
