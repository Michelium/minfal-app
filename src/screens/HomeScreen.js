import React from "react";

import { View, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as Colors from "../config/colors";
import MoreItem from "../components/more/MoreItem";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import HomeBlock from './../components/home/HomeBlock'


const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text category="h2" style={styles.title}>Goedemiddag, tering hoer</Text>
      <ScrollView>
        <HomeBlock title='Mijn buurt'/>
        <HomeBlock title='Binnenkort...'/>
        <HomeBlock title='Quiz'/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
    // justifyContent: "space-between",
  },
});

export default HomeScreen;
