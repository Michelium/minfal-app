import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapScreen from './MapScreen';

const HomeScreen = () => {
  return (
    <View style={ styles.container }>
      <MapScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default HomeScreen;
