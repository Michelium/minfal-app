import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { setStorageValue } from "./../../helpers";
import * as Colors from "./../../config/colors";
import { useNavigation } from "@react-navigation/native";

const ScreenThree = ({ onboardingRef }) => {
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ textAlign: "center", fontSize: 25 }}>Soorten bedrijven</Text>
      <Text style={{ fontSize: 18, marginTop: 50 }}>Ondernemers met Plus geven je</Text>
      <Text style={{ fontSize: 20, color: Colors.primary, marginTop: 50 }}>Exlusieve Minfal korting</Text>
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => {
          onboardingRef.current.goNext();
        }}
      >
        <Text>Volgende</Text>
      </TouchableOpacity>
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

export default ScreenThree;
