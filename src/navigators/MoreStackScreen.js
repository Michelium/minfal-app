import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Colors from "../config/colors";
import EntrepreneurLogin from './../components/more/EntrepreneurLogin';
import MoreScreen from '../screens/MoreScreen';

const MoreStack = createNativeStackNavigator();

const MoreStackScreen = () => {
  return (
    <MoreStack.Navigator
      screenOptions={{
        title: 'Minfal',
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
      <MoreStack.Screen name="Home" component={MoreScreen} />
      <MoreStack.Screen name="EntrepreneurLogin" component={EntrepreneurLogin} options={{
        title: 'Inloggen voor ondernemers',
      }} />
    </MoreStack.Navigator>
  );
}

export default MoreStackScreen;
