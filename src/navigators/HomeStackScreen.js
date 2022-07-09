import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Colors from "../config/colors";
import HomeScreen from '../screens/HomeScreen';
import EntrepreneurScreen from '../screens/EntrepreneurScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        title: 'Home',
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
          color: Colors.white,
        },
        headerBackTitleVisible: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
