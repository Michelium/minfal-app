import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import map_styles from "./../config/map_styles";
import axios from "axios";
// import MarkerIcon from './../../assets/icons/edit-map-marker-icon.svg'

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 52.10095646428125,
    longitude: 4.3380762590705,
    latitudeDelta: 1.0922,
    longitudeDelta: 1.0421,
  });

  const [markers, setMarkers] = useState([]);

  const getMarkers = async () => {
    try {
      const response = await axios.post("https://app.minfal.nl/api/companies");

      const data = await response.data;
  
      let tempMarkers = [];
      data.map((marker, index) => {
        if (marker.latitude && marker.longitude) {
          tempMarkers.push({
            id: marker.id,
            title: marker.name,
            description: marker.description,
            lat: parseFloat(marker.latitude),
            long: parseFloat(marker.longitude),
          });
        }
      });
      setMarkers(tempMarkers);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getMarkers();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={map_styles}
        region={region}
      >
        {markers.map((location, index) => (
          <Marker
            key={index}
            // onPress={() => { onMarkerPress(); setCurrentMarker(location.id) }}
            coordinate={{
              latitude: location.lat,
              longitude: location.long
            }}
          >
            {/* <MarkerIcon /> */}
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#312e38",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
