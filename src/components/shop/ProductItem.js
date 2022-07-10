import React from "react";

import { View, StyleSheet, Image, FlatList } from "react-native";
import { Text } from "@ui-kitten/components";
import * as Colors from "./../../config/colors";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const ProductItem = ({ product }) => {
  return (
    <View style={styles.listItem}>
      <Image
        source={{
          uri: "https://app.minfal.nl/uploads/images/" + product.image,
        }}
        style={{ width: 60, height: 60, marginRight: 10 }}
      />
      <View style={{ alignItems: "flex-start", flex: 1 }}>
        <Text style={{ fontWeight: "bold", color: Colors.black }}>{product.title}</Text>
        <Text style={{ fontWeight: "bold", color: Colors.primary }}>€ {product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    margin: 10,
    paddingHorizontal: 5,
    paddingVertical: 15,
    height: 150,
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: "center",
    // width: '100%',
    // alignSelf: "center",
    // flexDirection: "column",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
  },
});

export default ProductItem;
