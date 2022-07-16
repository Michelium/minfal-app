import React, { useEffect } from "react";

import { View, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as Colors from "../config/colors";
import MoreItem from "../components/more/MoreItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeBlock from "./../components/home/HomeBlock";
import PhoneMapImage from "./../../assets/images/home/phone-map.svg";
import BakeryImage from "./../../assets/images/home/bakery.svg";
import { setStorageValue } from "../helpers";
import * as Location from "expo-location";

const HomeScreen = ({ navigation }) => {
  const getLocationData = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setStorageValue("locationAccess", "false");
      return;
    }

    let locationData = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
    if (locationData) {
      let lat = locationData.coords.latitude;
      let long = locationData.coords.longitude;
      setStorageValue("locationAccess", "true");
      setStorageValue("userLatitude", lat.toString());
      setStorageValue("userLongitude", long.toString());
    } else {
      setStorageValue("locationAccess", "false");
      return;
    }
  };

  useEffect(() => {
    getLocationData();
  }, []);

  return (
    <View style={styles.container}>
      <Text category="h2" style={styles.title}>
        Goedemiddag, tering hoer
      </Text>
      <ScrollView>
        <HomeBlock title="Mijn buurt" location="Filter" />
        <HomeBlock title="Binnenkort..." location="Filter" />
        <HomeBlock title="Quiz" location="Filter" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
  },
});

export default HomeScreen;
