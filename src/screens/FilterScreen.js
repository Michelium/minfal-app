import React, { useState } from "react";

import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Colors from "./../config/colors";
import FilterFoodType from "./../components/filter/FilterFoodType";
import FilterRatings from "./../components/filter/FilterRatings";
import FilterFooter from "./../components/filter/FilterFooter";
import axios from "axios";

const FilterScreen = ({navigation}) => {
  const [category, setCategory] = useState("alle");
  const [rating, setRating] = useState("alle");
  const [opened, setOpened] = useState(false);

  const fetchCompanies = async () => {
    try {
      axios({
        method: "post",
        url: "https://app.minfal.nl/api/companies",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: {
          category: category,
          rating: rating,
        },
      }).then((response) => {
        navigation.navigate('ListScreen', {
          companies: response.data
        })
      });
    } catch (error) {
      alert(error);
    };
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Filters</Text>
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
  title: {
    fontWeight: "bold",
    fontSize: 22,
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
