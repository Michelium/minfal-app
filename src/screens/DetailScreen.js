import React, {useState, useEffect} from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LocationDetail from '../components/location/LocationDetail';

const DetailScreen = ({route}) => {

  const [location] = useState(route.params.location);
console.log(location);
  return (
    <ScrollView>
      <LocationDetail location={location} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default DetailScreen;
