import React from 'react';
import * as Colors from './../../config/colors';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LocationActionButton = ({title, icon}) => {
  return (
    <TouchableOpacity style={ styles.container }>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    width: 100,
    height: 65,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(201,201,201, 0.3)",
  },
  title: {
    fontSize: 10,
    marginTop: 5,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LocationActionButton;
