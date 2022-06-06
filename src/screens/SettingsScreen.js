import React from "react";

import { View, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as Colors from "./../config/colors";
import Setting from "../components/settings/Setting";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const SettingsScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <Setting text='Inloggen voor ondernemers' icon={<MaterialCommunityIcons name="login" size={24} color={Colors.primary} />} onPressIn={() => {navigation.navigate('EntrepreneurLogin')}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flex: 1,
    justifyContent: "space-between",
  },
});

export default SettingsScreen;
