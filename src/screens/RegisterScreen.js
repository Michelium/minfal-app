import React from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import * as Colors from "../config/colors";
import Constants from "expo-constants";
import { Button, Input, Text } from "@ui-kitten/components";

const RegisterScreen = () => {


  const items = [
    {
      label: "Alle",
      value: "alle",
    },
    {
      label: "Bioscopen",
      value: "bioscoop",
    },
    {
      label: "Slagers",
      value: "slager",
    },
    {
      label: "Kaasboeren",
      value: "kaasboer",
    },
    {
      label: "Groente-Fruitboeren",
      value: "groenteboer",
    },
    {
      label: "Visboer",
      value: "visboer",
    },
    {
      label: "Koffietent",
      value: "koffie tent",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title} category="h2">
        Registratie
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
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
  title: {
    marginBottom: 15,
  },
  label: {
    color: Colors.black,
    margin: 10,
    marginTop: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  input: {
    backgroundColor: "white",
    borderColor: "#fff",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default RegisterScreen;
