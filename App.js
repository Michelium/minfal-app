import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import * as Colors from "./src/config/colors";
import GlobeIcon from "./assets/icons/edit-globe-icon.svg";
import LocationIcon from "./assets/icons/nav-location-icon.svg";
import HelpIcon from "./assets/icons/nav-help-icon.svg";
import HandShakeIcon from "./assets/icons/nav-handshake-icon.svg";
import BuildingIcon from "./assets/icons/nav-building-icon.svg";
import SettingsIcon from "./assets/icons/nav-settings-icon.svg";
import FilterScreen from "./src/screens/FilterScreen";
import ListScreen from "./src/screens/ListScreen";
import MapScreen from "./src/screens/MapScreen";
import EntrepreneurScreen from "./src/screens/EntrepreneurScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { default as theme } from './src/config/custom-theme.json'
import { default as mapping } from './src/config/mapping.json'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}} customMapping={mapping}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              color: Colors.white,
            },
            drawerStyle: {
              backgroundColor: Colors.primary,
            },
            drawerLabelStyle: {
              color: Colors.white,
            },
          }}
        >
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              drawerItemStyle: { display: "none" },
            }}
          />
          <Drawer.Screen
            name="Map"
            component={MapScreen}
            options={{
              headerTitle: "Minfal",
              drawerLabel: "Naar de kaart",
              drawerIcon: () => <GlobeIcon />,
            }}
          />
          <Drawer.Screen
            name="Filter"
            component={FilterScreen}
            options={{
              headerTitle: "In de buurt",
              drawerLabel: "In de buurt",
              drawerIcon: () => <LocationIcon />,
            }}
          />
          {/* <Drawer.Screen
          name="About"
          component={HomeScreen}
          options={{
            headerTitle: "Hoe werkt het",
            drawerLabel: "Hoe werkt het?",
            drawerIcon: () => <HelpIcon />,
          }}
        /> */}
          {/* <Drawer.Screen
          name="News"
          component={HomeScreen}
          options={{
            headerTitle: "Ontwikkelingen Minfal",
            drawerLabel: "Ontwikkelingen Minfal",
            drawerIcon: () => <BuildingIcon />,
          }}
        /> */}
          <Drawer.Screen
            name="Shop"
            component={MapScreen}
            options={{
              headerTitle: "Minfal Shop",
              drawerLabel: "Minfal Shop",
              drawerIcon: () => <HandShakeIcon />,
            }}
          />
          <Drawer.Screen
            name="Settings"
            component={MapScreen}
            options={{
              headerTitle: "Instellingen",
              drawerLabel: "Instellingen",
              drawerIcon: () => <SettingsIcon />,
            }}
          />
          <Drawer.Screen
            name="List"
            component={ListScreen}
            options={{
              headerTitle: "Winkels in de buurt",
              drawerItemStyle: { display: "none" },
            }}
          />
          <Drawer.Screen
            name="Entrepreneur"
            component={EntrepreneurScreen}
            options={{
              headerShown: false,
              drawerItemStyle: { display: "none" },
            }}
          />
          <Drawer.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: false,
              drawerItemStyle: { display: "none" },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
