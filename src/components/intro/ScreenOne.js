import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { setStorageValue } from "./../../helpers";
import * as Colors from "./../../config/colors";
import { useNavigation } from '@react-navigation/native';

const ScreenOne = ({onboardingRef}) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.title}>Welkom</Text>
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => {
          setStorageValue("user_mode", "client");
          onboardingRef.current.goNext();
        }}
      >
        <Text>Ga door</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.entrepreneurButton}
        onPress={() => {
          setStorageValue("user_mode", "entrepreneur");
          navigation.navigate("Entrepreneur");
        }}
      >
        <Text>Ondernemer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "400",
    fontSize: 45,
    textAlign: 'center',
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

export default ScreenOne;
