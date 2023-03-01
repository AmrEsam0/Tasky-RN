import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from './src/style/Colors';
import {HomeScreen} from './src/screens/Home';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="TaskScreen"
          screenOptions={{
            headerShown: false,
            statusBarColor: Colors.backgroundDarkest,
            statusBarStyle: 'light',
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
