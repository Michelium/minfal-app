import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Colors from "./../../src/config/colors";
import SettingsScreen from '../screens/SettingsScreen';
import EntrepreneurLogin from '../components/settings/EntrepreneurLogin';

const SettingsStack = createNativeStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        title: 'Instellingen',
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
      <SettingsStack.Screen name="Home" component={SettingsScreen} />
      <SettingsStack.Screen name="EntrepreneurLogin" component={EntrepreneurLogin} options={{
        title: 'Inloggen voor ondernemers',
      }} />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;
