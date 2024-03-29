import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import IntroScreen from "./src/screens/IntroScreen";
import * as Colors from "./src/config/colors";
import FilterScreen from "./src/screens/FilterScreen";
import ListScreen from "./src/screens/ListScreen";
import MapScreen from "./src/screens/MapScreen";
import EntrepreneurScreen from "./src/screens/EntrepreneurScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { default as theme } from "./src/config/custom-theme.json";
import { default as mapping } from "./src/config/mapping.json";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import FilterStackScreen from "./src/navigators/FilterStackScreen";
import HomeStackScreen from "./src/navigators/HomeStackScreen";
import MoreStackScreen from "./src/navigators/MoreStackScreen";
import IntroStackScreen from "./src/navigators/IntroStackScreen";
import ShopStackScreen from "./src/navigators/ShopStackScreen";


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }} customMapping={mapping}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              color: Colors.white,
            },
            tabBarActiveTintColor: Colors.primary,
            tabBarLabelStyle: {
              fontWeight: '600',
              fontSize: 12,
            }
          }}
        >

          <Tab.Screen
            name="Intro"
            component={IntroStackScreen}
            options={{
              title: "Intro",
              tabBarIcon: ({focused}) => <FontAwesome name="home" size={24} color={focused ? Colors.primary : "black"} />,
              headerShown: false,
              tabBarButton: (props) => null,
            }}
          />
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              title: "Home",
              tabBarIcon: ({focused}) => <FontAwesome name="home" size={24} color={focused ? Colors.primary : "black"} />,
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Filter"
            component={FilterStackScreen}
            options={{
              title: "In de buurt",
              tabBarIcon: ({focused}) => <FontAwesome name="filter" size={24} color={focused ? Colors.primary : "black"} />,
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              title: "Kaart",
              tabBarIcon: ({focused}) => <FontAwesome5 name="map-marker-alt" size={22} color={focused ? Colors.primary : "black"} />,
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Shop"
            component={ShopStackScreen}
            options={{
              title: "Winkel",
              tabBarIcon: ({focused}) => <FontAwesome5 name="store" size={18} color={focused ? Colors.primary : "black"} />,
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="More"
            component={MoreStackScreen}
            options={{
              title: "Meer",
              tabBarIcon: ({focused}) => <MaterialIcons name="menu" size={35} color={focused ? Colors.primary : "black"} />,
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
