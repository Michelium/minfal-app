import React from "react";

import { View, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as Colors from "../config/colors";
import MoreItem from "../components/more/MoreItem";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const MoreScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <MoreItem text='Inloggen voor ondernemers' icon={<MaterialCommunityIcons name="login" size={24} color={Colors.primary} />} onPressIn={() => {navigation.navigate('EntrepreneurLogin')}} />
        <MoreItem text='Over deze app' icon={<MaterialCommunityIcons name="information" size={24} color={Colors.primary} />} onPressIn={() => {navigation.navigate('AboutApp')}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
    justifyContent: "space-between",
  },
});

export default MoreScreen;
