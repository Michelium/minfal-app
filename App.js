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

const Drawer = createDrawerNavigator();

const App = () => {
  return (
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
          component={HomeScreen}
          options={{
            headerTitle: "Minfal Shop",
            drawerLabel: "Minfal Shop",
            drawerIcon: () => <HandShakeIcon />,
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={HomeScreen}
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
