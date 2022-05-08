import React, { useState } from "react";
import { StyleSheet, Switch, Button, View, Text } from "react-native";
import * as Colors from "../../config/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const FilterFooter = ({ opened, setOpened }) => {
  const toggleSwitch = () => setOpened((previousState) => !previousState);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      {/* <View style={styles.switchContainer}> */}
      <Text style={{ marginBottom: 7 }}>Opties</Text>
      {/* <Switch
        value={opened}
        thumbColor={Colors.primary}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        trackColor={{ false: Colors.border, true: Colors.primary }}
      /> */}
      {/* </View> */}
      <BouncyCheckbox
        size={25}
        fillColor={Colors.primary}
        unfillColor="#FFFFFF"
        text="Nu geopend"
        iconStyle={{ borderColor: Colors.primary }}
        textStyle={{
          textDecorationLine: "none",
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
    // flex: 1,
    // paddingVertical: 30,
    // paddingHorizontal: 20,
    // justifyContent: "space-between",
  },
  switchContainer: {
    justifyContent: "space-between",
  },
});

export default FilterFooter;
