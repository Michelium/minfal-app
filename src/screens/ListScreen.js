import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Colors from "./../config/colors";

const ListScreen = (props) => {
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = () => {
    const companies = props.route.params.companies;
    if (companies !== null) {
      setCompanies(companies);
      return;
    }

    // todo axios fetch
  };

  const renderData = (company) => {
    return (
      <TouchableOpacity style={styles.listItem}>
        <Image source={{ uri: 'https://app.minfal.nl/uploads/images/' + company.logo }} style={{ width: 60, height: 60, marginRight: 10 }} />
        <View style={{ alignItems: "flex-start", flex: 1 }}>
          <Text lg style={{ fontWeight: "bold", color: Colors.black }}>{company.name}</Text>
          <Text sm style={{color: Colors.black}}>{company.location_name}</Text>
        </View>
      </TouchableOpacity>
    );
  }


  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <View style={styles.container}>
        <FlatList 
          data={companies}
          renderItem={({ item }) => {
            return renderData(item);
          }}
          keyExtractor={item => `${item.id}` }
        />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    margin: 10,
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
