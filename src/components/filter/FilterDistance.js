import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import * as Colors from "../../config/colors";
// import Slider from "@react-native-community/slider";
// import Slider from "react-native-slider";
import {Slider} from '@miblanchard/react-native-slider';


const FilterDistance = ({ distance, setDistance }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginBottom: 7 }}>
        <Text>Afstand</Text>
        <Text style={{ flex: 1, textAlign: "right" }}>{distance} km</Text>
      </View>
      <Slider
        style={{ width: "100%" }}
        minimumValue={1}
        maximumValue={50}
        value={distance}
        minimumTrackTintColor={Colors.primary}
        maximumTrackTintColor="#000000"
        thumbTintColor="#ffffff"
        onValueChange={value => setDistance(value.find(Number).toFixed(0))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});

export default FilterDistance;
