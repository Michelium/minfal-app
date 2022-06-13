import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";
import { getSetting } from "./../../helpers";
import { ScrollView } from "react-native-gesture-handler";

const AboutApp = () => {
  const [setting, setSetting] = useState({});

  useEffect(async () => {
    const setting = await getSetting("app:about_app");
    setSetting(setting);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={{ marginTop: 10 }} category="h2">Over deze App</Text>
        <Text style={{ marginTop: 10 }} category="p1">
          {setting.value ? setting.value : "Niet gevonden."}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
});

export default AboutApp;
