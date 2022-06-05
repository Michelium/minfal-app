import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Colors from "./../../src/config/colors";
import HomeScreen from '../screens/HomeScreen';
import EntrepreneurScreen from '../screens/EntrepreneurScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Client" component={HomeScreen} />
      <HomeStack.Screen name="Entrepreneur" component={EntrepreneurScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
