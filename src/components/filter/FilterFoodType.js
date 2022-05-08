import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import CinemaIcon from "./../../../assets/icons/filter-cinema-icon.svg";
import MeatIcon from "./../../../assets/icons/filter-meat-icon.svg";
import ChessIcon from "./../../../assets/icons/filter-chess-icon.svg";
import StrawberryIcon from "./../../../assets/icons/filter-strawberry-icon.svg";
import FishIcon from "./../../../assets/icons/filter-fish-icon.svg";
import TeaIcon from "./../../../assets/icons/filter-tea-icon.svg";

import * as Colors from "./../../config/colors";

const FilterFoodType = ({ category, setCategory }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {
      label: "Alle",
      value: "alle",
      containerStyle: styles.itemContainerStyles,
    },
    {
      label: "Bioscopen",
      value: "bioscoop",
      icon: () => <CinemaIcon />,
      containerStyle: styles.itemContainerStyles,
    },
    {
      label: "Slagers",
      value: "slager",
      icon: () => <MeatIcon />,
      containerStyle: styles.itemContainerStyles,
    },
    {
      label: "Kaasboeren",
      value: "kaasboer",
      icon: () => <ChessIcon />,
      containerStyle: styles.itemContainerStyles,
    },
    {
      label: "Groente-Fruitboeren",
      value: "groenteboer",
      icon: () => <StrawberryIcon />,
      containerStyle: styles.itemContainerStyles,
    },
    {
      label: "Visboer",
      value: "visboer",
      icon: () => <FishIcon />,
      containerStyle: styles.itemContainerStyles,
    },
    {
      label: "Koffietent",
      value: "koffie tent",
      icon: () => <TeaIcon />,
      containerStyle: styles.itemContainerStyles,
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 7 }}>Categorie</Text>
      <DropDownPicker
        open={open}
        value={category}
        items={items}
        setOpen={setOpen}
        setValue={setCategory}
        setItems={setItems}
        style={styles.dropdownContainer}
        arrowIconStyle={styles.dropdownArrow}
        placeholder="Select Food Type"
        dropDownDirection="BOTTOM"
        maxHeight={350}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    position: "relative",
    zIndex: 1000,
    marginBottom: 25,
  },
  dropdownContainer: {
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: Colors.primary,
    elevation: 1000,
    paddingVertical: 5,
  },
  dropdownArrow: {
    width: 30,
    height: 30,
  },
});

export default FilterFoodType;
