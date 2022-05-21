import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainScreen} from '../Screen/MainScreen';
import ScreenName from './Screenconstants';

const Stack = createNativeStackNavigator();
export const MainNav = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name='Home' component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
