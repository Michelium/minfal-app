import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Colors from "../config/colors";
import IntroScreen from '../screens/IntroScreen';
import EntrepreneurScreen from '../screens/EntrepreneurScreen';

const IntroStack = createNativeStackNavigator();

const IntroStackScreen = () => {
  return (
    <IntroStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <IntroStack.Screen name="Client" component={IntroScreen} />
      <IntroStack.Screen name="Entrepreneur" component={EntrepreneurScreen} />
    </IntroStack.Navigator>
  );
}

export default IntroStackScreen;
