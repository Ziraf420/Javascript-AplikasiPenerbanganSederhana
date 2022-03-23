import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/home';
import Stack from './src/screen/stack';

const App = () => {

  return (

    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default App;

