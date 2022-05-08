import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { View, Button, StyleSheet, Dimensions } from "react-native";
import map_styles from "./../config/map_styles";
import axios from "axios";
// import MarkerIcon from './../../assets/icons/edit-map-marker-icon.svg'
import FilterIcon from "./../../assets/icons/edit-filter-icon.svg";
import { TouchableOpacity } from "react-native-gesture-handler";

const MapScreen = ({ navigation, setCurrentLocation, onMarkerPress }) => {
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
        initialRegion={region}
      >
        {markers.map((location, index) => (
          <Marker
            key={index}
            onPress={() => {
              onMarkerPress();
              setCurrentLocation(location.id);
            }}
            coordinate={{
              latitude: location.lat,
              longitude: location.long,
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
    overflow: "hidden",
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  filterBtn: {
    width: 75,
    height: 75,
    right: 0,
    bottom: "8%",
    marginRight: 20,
    borderRadius: 75 / 2,
    position: "absolute",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "rgba(201,201,201, 1)",
  },
  filterBtnImg: {
    width: 60,
    height: 37,
  },
});

export default MapScreen;
