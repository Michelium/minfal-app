import { Text } from "@ui-kitten/components";
import React from "react";

import { View, StyleSheet, TouchableOpacity } from "react-native";

const Setting = ({ text, icon, ...props }) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      {icon}
      <Text category={"h5"} style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  title: {
    marginLeft: 15,
  },
});

export default Setting;
