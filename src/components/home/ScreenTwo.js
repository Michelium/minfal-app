import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { setStorageValue } from "./../../helpers";
import * as Colors from "./../../config/colors";
import { useNavigation } from "@react-navigation/native";

const ScreenTwo = ({ onboardingRef }) => {
  const navigation = useNavigation();

  return (
    <>
      <View>
        <Text style={{ textAlign: "center", fontSize: 25 }}>Recyclen kan...</Text>
        <Text style={{ fontSize: 25 }}>
          Tóch is <Text style={{ color: Colors.primary }}>hergebruiken</Text> véél beter!
        </Text>
      </View>
      <View style={{ width: "90%", alignItems: "center" }}>
        <Text style={{ textAlign: "center", fontSize: 18, marginTop: 50 }}>Winkelen met je eigen verpakking was nog nooit zó makkelijk!</Text>
        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => {
            onboardingRef.current.goNext();
          }}
        >
          <Text>Volgende</Text>
        </TouchableOpacity>
      </View>
    </>
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

export default ScreenTwo;
