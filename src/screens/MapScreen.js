import React, { useState, useEffect } from "react";
import MapView from "react-native-map-clustering";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import map_styles from "./../config/map_styles";
import axios from "axios";
import MarkerIcon from "./../../assets/icons/edit-map-marker-icon.svg";
import FilterIcon from "./../../assets/icons/edit-filter-icon-map.svg";
import * as Colors from "./../config/colors";
import { useNavigation } from "@react-navigation/native";
import LocationDetailSheet from "../components/location/LocationDetailSheet";

const MapScreen = () => {
  const navigation = useNavigation();

  const [region, setRegion] = useState({
    latitude: 52.10095646428125,
    longitude: 4.3380762590705,
    latitudeDelta: 1.0922,
    longitudeDelta: 1.0421,
  });

  const [markers, setMarkers] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

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

  useEffect(() => {
    getMarkers();
  }, []);

  return (
    <View style={styles.container}>
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Filter");
        }}
        style={styles.filterBtn}
      >
        <FilterIcon style={styles.filterBtnImg} />
      </TouchableOpacity>
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
  filterBtn: {
    position: "absolute",
    right: 30,
    bottom: 30,
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    borderRadius: 75 / 2,
    width: 75,
    height: 75,
    zIndex: 100,
  },
  filterBtnImg: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
});

export default MapScreen;
