import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { Text } from "@ui-kitten/components";
import { TouchableOpacity } from "react-native-gesture-handler";
import LocationDetailSheet from "../components/location/LocationDetailSheet";
import * as Colors from "./../config/colors";

const ListScreen = (props) => {
  const [companies, setCompanies] = useState({});
  const [currentLocation, setCurrentLocation] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const _handleShowDetails = () => {
    setShowDetails(!showDetails);
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
          setCurrentLocation(company.id);
          _handleShowDetails();
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
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} category="h2">Minfal heeft {Object.keys(companies).length} winkels gevonden.</Text>
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

      {currentLocation && showDetails && <LocationDetailSheet location={currentLocation} onClose={_handleShowDetails} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
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
