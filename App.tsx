/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {createContext} from 'react';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ThemeProvider from './src/theming/ThemeProvider';
import Profile from './src/screens/profileScreen/profile';

const Stack = createNativeStackNavigator();

const ThemeContext = createContext({});

function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="profileScreen" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
export {ThemeContext};
