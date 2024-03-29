import React, { useState } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import * as Colors from "./../../config/colors";
import { SegmentedControls } from "react-native-radio-buttons";

const FilterRatings = ({ rating, setRating }) => {
  const _handleSelected = (option) => {
    setRating(option);
  };

  const options = ["alle", "basic", "plus"];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 7 }}>Minfal Rating</Text>
      <SegmentedControls
        tint={Colors.primary}
        options={options}
        optionStyle={{ fontSize: 15, paddingVertical: 5 }}
        onSelection={_handleSelected.bind(this)}
        selectedOption={rating}
        extractText={(option) => capitalizeFirstLetter(option)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  ratingBtn: {
    flex: 1,
    borderRadius: 4,
    paddingVertical: 9,
    backgroundColor: Colors.primary,
    color: Colors.black,
  },
});

export default FilterRatings;
