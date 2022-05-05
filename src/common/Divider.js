import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = () => {
  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2, marginVertical: 10, borderColor: '#F6F6F6'
  },
});

export default Divider;
