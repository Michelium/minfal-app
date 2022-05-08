import React from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Colors from "../../config/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const FilterFooter = ({ opened, setOpened }) => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 7 }}>Opties</Text>
      <BouncyCheckbox
        size={25}
        fillColor={Colors.primary}
        unfillColor="#FFFFFF"
        text="Nu geopend"
        iconStyle={{ borderColor: Colors.primary }}
        textStyle={{
          textDecorationLine: "none",
          fontSize: 15,
        }}
        onPress={(isChecked) => {
          setOpened(isChecked);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
});

export default FilterFooter;
