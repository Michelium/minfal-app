import React from "react";

import { View, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as Colors from "../config/colors";
import MoreItem from "../components/more/MoreItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeBlock from "./../components/home/HomeBlock";
import PhoneMapImage from "./../../assets/images/home/phone-map.svg";
import BakeryImage from "./../../assets/images/home/bakery.svg";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text category="h2" style={styles.title}>
        Goedemiddag, tering hoer
      </Text>
      <ScrollView>
        <HomeBlock title="Mijn buurt" location="Filter"  />
        <HomeBlock title="Binnenkort..." location="Filter"  />
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
