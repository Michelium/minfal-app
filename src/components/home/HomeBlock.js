import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "@ui-kitten/components";
import { getSetting } from "./../../helpers";
import { ScrollView } from "react-native-gesture-handler";
import * as Colors from "./../../config/colors";

const HomeBlock = ({title}) => {
  return (
    <TouchableOpacity>
        <View style={styles.container}>
            <Text style={{ marginLeft: 10 }} category="h2">{title}</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    paddingHorizontal: 15,
    borderColor: Colors.primary,
    borderWidth: 3,
    borderRadius: 30,
    justifyContent: 'center',
    flex: 1,
    marginBottom: 25,
  },
});

export default HomeBlock;
