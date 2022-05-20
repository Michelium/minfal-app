import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { setStorageValue } from "./../../helpers";
import * as Colors from "./../../config/colors";
import { useNavigation } from "@react-navigation/native";

const ScreenOne = ({ onboardingRef }) => {
  const navigation = useNavigation();

  return (
    <View style={{ alignContent: "center" }}>
      <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "600" }}>Mogen klanten bij jou eigen verpakkingen meenemen?</Text>
      <Text style={{ textAlign: "center", fontSize: 25, marginTop: 50 }}>Zet jezelf dan binnen 1 minuut in de Minfal app!</Text>
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => {
          onboardingRef.current.goNext();
        }}
      >
        <Text>Verder</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ScreenOne;
