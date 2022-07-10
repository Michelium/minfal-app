import React, { useEffect, useState } from "react";

import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "@ui-kitten/components";
import * as Colors from "../config/colors";
import ProductItem from "../components/shop/ProductItem";
import axios from "axios";

const ShopScreen = ({ navigation }) => {
  const [products, setProducts] = useState({});

  const fetchProducts = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "https://app.minfal.nl/api/products",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      }).then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          setProducts(response.data);
        }
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Text category="h2">Minfal Winkel</Text>
      {products != {} && (
        <FlatList
          // style={styles.list}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={Object.values(products)}
          renderItem={({ item }) => {
            return <ProductItem product={item}/>;
          }}
          keyExtractor={(item) => `${item.id}`}
        />
      )}
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
  list: {
    // flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // backgroundColor: 'tomato',
  },
});

export default ShopScreen;
