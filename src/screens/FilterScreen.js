import React, { useState, useEffect } from "react";

import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "@ui-kitten/components";
import * as Colors from "./../config/colors";
import FilterFoodType from "./../components/filter/FilterFoodType";
import FilterRatings from "./../components/filter/FilterRatings";
import FilterFooter from "./../components/filter/FilterFooter";
import FilterDistance from "./../components/filter/FilterDistance";
import axios from "axios";
import { getCityApiData, getStorageValue } from "../helpers";

const FilterScreen = ({ navigation }) => {
  const [category, setCategory] = useState("alle");
  const [distance, setDistance] = useState(null);
  const [rating, setRating] = useState("alle");
  const [opened, setOpened] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  const fetchCompanies = async () => {
    try {
      if ((await getStorageValue("locationAccess")) === "true") {
        const latitude = await getStorageValue("userLatitude");
        const longitude = await getStorageValue("userLongitude");
      }

      const response = await axios({
        method: "post",
        url: "https://app.minfal.nl/api/companies",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
        data: {
          category: category,
          rating: rating,
          opened: opened,
          distance: distance,
          latitude: await getStorageValue("userLatitude") !== null ? await getStorageValue("userLatitude") : null,
          longitude: await getStorageValue("userLongitude") !== null ? await getStorageValue("userLongitude") : null,
        },
      });
      if (response.status === 200) {
        navigation.navigate("List", { data: response.data });
      }
    } catch (error) {
      alert(error);
    }
  };

  const fetchLocation = async () => {
    if ((await getStorageValue("locationAccess")) === "true") {
      const latitude = await getStorageValue("userLatitude");
      const longitude = await getStorageValue("userLongitude");

      const data = await getCityApiData(latitude, longitude);

      const locality = data.locality;
      const place = data.localityInfo.administrative.find((element) => element.adminLevel === 10) ?? null;
      const municipality = data.localityInfo.administrative.find((element) => element.adminLevel === 8) ?? null;

      let userLocation = locality;
      if (place !== null) {
        if (locality !== place.name) {
          userLocation += ", " + place.name;
        }
      }
      if (municipality !== null) {
        if ((place === null || municipality.name !== place.name) && municipality.name !== locality.name) {
          userLocation += ", " + municipality.name;
        }
      }

      setUserLocation(userLocation);
      setDistance(10);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text category="h2" style={{ marginBottom: 20 }}>
          In de buurt
        </Text>
        {userLocation !== null && (
          <>
            <Text category="h5" style={{ marginBottom: 20 }}>
              {userLocation}
            </Text>
            <FilterDistance distance={distance} setDistance={setDistance} />
          </>
        )}
        <FilterFoodType category={category} setCategory={setCategory} />
        <FilterRatings rating={rating} setRating={setRating} />
        <FilterFooter opened={opened} setOpened={setOpened} />
      </View>
      <View>
        <TouchableOpacity onPress={fetchCompanies} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Zoeken</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flex: 1,
    justifyContent: "space-between",
  },
  searchButton: {
    backgroundColor: Colors.primary,
    width: 300,
    borderRadius: 12,
    borderWidth: 1,
    marginVertical: 20,
    paddingVertical: 17,
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    alignSelf: "center",
  },
  searchButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.white,
  },
});

export default FilterScreen;
