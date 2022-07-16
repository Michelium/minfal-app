import React, { useState, useEffect } from "react";
import MapView from "react-native-map-clustering";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import map_styles from "./../config/map_styles";
import axios from "axios";
import MarkerIcon from "./../../assets/icons/edit-map-marker-icon.svg";
import * as Colors from "./../config/colors";
import { useNavigation } from "@react-navigation/native";
import LocationDetailSheet from "../components/location/LocationDetailSheet";
import { getStorageValue } from "../helpers";

const MapScreen = () => {
  const navigation = useNavigation();

  const [region, setRegion] = useState({
    latitude: 52.373098,
    longitude: 5.957094,
    latitudeDelta: 1.0922,
    longitudeDelta: 1.0421,
  });

  const [markers, setMarkers] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [locationData, setLocationData] = useState(null);

  const _handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

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

  const getLocationData = async () => {
    if ((await getStorageValue("locationAccess")) === "true") {
      const latitude = await getStorageValue("userLatitude");
      const longitude = await getStorageValue("userLongitude");
      setRegion({ ...region, latitude: Number(latitude), longitude: Number(longitude) });
      setLocationData({
        latitude: Number(latitude),
        longitude: Number(longitude),
      });
    } else {
      setLocationData(false);
    }
    return;
  };

  useEffect(() => {
    getMarkers();
    getLocationData();
  }, []);

  return (
    <View style={styles.container}>
      {(locationData === false || locationData instanceof Object) && (
        <MapView style={styles.map} provider={PROVIDER_GOOGLE} customMapStyle={map_styles} initialRegion={region} clusterColor={Colors.primary}>
          {markers.map((location, index) => (
            <Marker
              key={index}
              onPress={() => {
                _handleShowDetails();
                setCurrentLocation(location.id);
              }}
              coordinate={{
                latitude: location.lat,
                longitude: location.long,
              }}
            >
              <MarkerIcon />
            </Marker>
          ))}
        </MapView>
      )}
      {currentLocation && showDetails && <LocationDetailSheet location={currentLocation} onClose={_handleShowDetails} />}
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
    zIndex: -1,
  },
});

export default MapScreen;
