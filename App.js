/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {MainScreen} from './Source/Screen/MainScreen';
import {MainNav} from './Source/route/stackScreen'

const App = () => {
  return (
    <SafeAreaView>
      <MainNav />
    </SafeAreaView>
  );
};

export default App;
