import React, { useState } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import * as Colors from "./../../config/colors";
import { SegmentedControls } from "react-native-radio-buttons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

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
      <View style={styles.buttonContainer}>
        <SegmentedControls
          tint={Colors.primary}
          options={options}
          optionStyle={{ fontSize: 15, paddingVertical: 5 }}
          onSelection={_handleSelected.bind(this)}
          selectedOption={rating}
          extractText={(option) => capitalizeFirstLetter(option)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  buttonContainer: {
    // flex: 1,
    // flexDirection: "column",
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
