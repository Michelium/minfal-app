import React from "react";
import * as Colors from "./../../config/colors";
import { View, Text, StyleSheet, Image } from "react-native";

const LocationName = ({ name, location_name, logo }) => {
  const imageUrl = { uri: "https://app.minfal.nl/uploads/images/" + logo };

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 15, paddingVertical: 10,}}>
        <Text style={{ fontSize: 22, fontWeight: "500", marginBottom: 5 }}>
          {name}
        </Text>
        <Text>{location_name}</Text>
      </View>
      <View>
        <Image source={imageUrl} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 8,
    justifyContent: "space-between",
    backgroundColor: Colors.white,
    marginBottom: 15,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    margin: 5,
    alignSelf: "flex-end",
  },
});

export default LocationName;
