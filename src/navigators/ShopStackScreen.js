import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Colors from "../config/colors";
import ShopScreen from '../screens/ShopScreen';

const ShopStack = createNativeStackNavigator();

const ShopStackScreen = () => {
  return (
    <ShopStack.Navigator
      screenOptions={{
        title: 'Minfal winkel',
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
      <ShopStack.Screen name="Home" component={ShopScreen} />
    </ShopStack.Navigator>
  );
}

export default ShopStackScreen;
