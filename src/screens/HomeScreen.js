import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import LocationDetailSheet from "../components/location/LocationDetailSheet";
import MapScreen from "./MapScreen";

const HomeScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const _handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <View style={styles.container}>
      <MapScreen
        onMarkerPress={_handleShowDetails}
        setCurrentLocation={setCurrentLocation}
      />
      {currentLocation && showDetails && (
        <LocationDetailSheet
          location={currentLocation}
          onClose={_handleShowDetails}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#312e38",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#fff",
  },
});

export default HomeScreen;
