import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { setStorageValue } from "./../../helpers";
import * as Colors from "./../../config/colors";
import { useNavigation } from "@react-navigation/native";

const ScreenFour = ({ onboardingRef }) => {
  const navigation = useNavigation();

  return (
    <View style={{ alignContent: "center" }}>
    <Text style={{ textAlign: "center", fontSize: 25 }}>Stel een plaats in en zoek meteen ondernemers in de buurt!</Text>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity
        style={[styles.mainButton, { width: 150 }]}
        onPress={() => {
          navigation.navigate("Map");
        }}
      >
        <Text>Naar de kaart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.mainButton, { width: 150 }]}
        onPress={() => {
          navigation.navigate("Filter");
        }}
      >
        <Text>Filter bedrijven</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "400",
    fontSize: 45,
    textAlign: "center",
  },
  mainButton: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    width: 250,
    height: 45,
    marginTop: 30,
  },
  entrepreneurButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    marginTop: 10,
  },
});

export default ScreenFour;
