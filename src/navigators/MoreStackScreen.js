import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Colors from "../config/colors";
import EntrepreneurLogin from './../components/more/EntrepreneurLogin';
import MoreScreen from '../screens/MoreScreen';
import AboutApp from '../components/more/AboutApp';

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
      <MoreStack.Screen name="AboutApp" component={AboutApp} options={{
        title: 'Over deze App',
      }} />
    </MoreStack.Navigator>
  );
}

export default MoreStackScreen;
