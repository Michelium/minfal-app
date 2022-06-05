import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilterScreen from '../screens/FilterScreen';
import ListScreen from '../screens/ListScreen';
import * as Colors from "./../../src/config/colors";

const FilterStack = createNativeStackNavigator();

const FilterStackScreen = () => {
  return (
    <FilterStack.Navigator
      screenOptions={{
        title: 'In de buurt',
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
      <FilterStack.Screen name="Home" component={FilterScreen} />
      <FilterStack.Screen name="List" component={ListScreen} />
    </FilterStack.Navigator>
  );
}

export default FilterStackScreen;
