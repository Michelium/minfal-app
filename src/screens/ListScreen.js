import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { Text } from "@ui-kitten/components";
import * as Colors from "./../config/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const ListScreen = (props) => {
  const [companies, setCompanies] = useState({});

  const _handleShowDetails = (company) => {
    props.navigation.navigate("Detail", { location: company.id });
  };

  const fetchCompanies = () => {
    if (props.route.params.data) {
      setCompanies(props.route.params.data);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, [props]);

  const renderData = (company) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => {
          _handleShowDetails(company);
        }}
      >
        <Image
          source={{
            uri: "https://app.minfal.nl/uploads/images/" + company.logo,
          }}
          style={{ width: 60, height: 60, marginRight: 10 }}
        />
        <View style={{ alignItems: "flex-start", flex: 1 }}>
          <Text style={{ fontWeight: "bold", color: Colors.black }}>{company.name}</Text>
          <Text style={{ color: Colors.black }}>{company.location_name}</Text>
          {company.distance !== undefined && (
            <View style={{flexDirection: 'row', marginTop: 10,}}>
              <MaterialCommunityIcons name="map-marker-distance" size={15} color="black" />
              <Text category="p2"> {company.distance} km</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} category="h2">
        Minfal heeft {Object.keys(companies).length} winkels gevonden.
      </Text>
      {companies != {} && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Object.values(companies)}
          renderItem={({ item }) => {
            return renderData(item);
          }}
          keyExtractor={(item) => `${item.id}`}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    marginBottom: 10,
  },
  listItem: {
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#FFF",
    width: "90%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
  },
});

export default ListScreen;
