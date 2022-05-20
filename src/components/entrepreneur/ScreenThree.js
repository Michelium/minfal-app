import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Colors from "./../../config/colors";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const ScreenThree = ({ onboardingRef }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.expandedContainer}>
    <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "600" }}>Kies een optie.</Text>
    <View style={styles.tableView}>
      <View style={styles.tableRow}>
        <View style={[styles.tableColumn, { width: "50%" }]}>
          <Text> </Text>
        </View>
        <View style={[styles.tableColumn, { width: "25%", alignItems: 'center' }]}>
          <Text style={styles.tableColumnText}>Basic</Text>
        </View>
        <View style={[styles.tableColumn, { width: "25%", alignItems: 'center' }]}>
          <Text style={styles.tableColumnText}>Plus</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={[styles.tableColumn, { width: "50%" }]}>
          <Text style={styles.tableColumnText}>Plekje op de kaart</Text>
        </View>
        <View style={[styles.tableColumn, { width: "25%", alignItems: 'center' }]}>
          <AntDesign name="check" size={40} color="black" />
        </View>
        <View style={[styles.tableColumn, { width: "25%", alignItems: 'center' }]}>
          <AntDesign name="check" size={40} color="black" />
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={[styles.tableColumn, { width: "50%" }]}>
          <Text style={styles.tableColumnText}>Bedrijfsinformatie toevoegen</Text>
        </View>
        <View style={[styles.tableColumn, { width: "25%", alignItems: 'center' }]}>
          <AntDesign name="check" size={40} color="black" />
        </View>
        <View style={[styles.tableColumn, { width: "25%", alignItems: 'center' }]}>
          <AntDesign name="check" size={40} color="black" />
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={[styles.tableColumn, { width: "50%" }]}>
          <Text style={styles.tableColumnText}>Openingstijden toevoegen</Text>
        </View>
        <View style={[styles.tableColumn, { width: "25%", alignItems: 'center' }]}>
          <AntDesign name="check" size={40} color="black" />
        </View>
        <View style={[styles.tableColumn, { width: "25%", alignItems: 'center' }]}>
          <AntDesign name="check" size={40} color="black" />
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={[styles.tableColumn, { width: "50%" }]}>
          <Text style={styles.tableColumnText}>Geverifieerd</Text>
        </View>
        <View style={[styles.tableColumn, { width: "25%", alignItems: 'center' }]}>
          <Text> </Text>
        </View>
        <View style={[styles.tableColumn, { width: "25%", alignItems: 'center' }]}>
          <AntDesign name="check" size={40} color="black" />
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={[styles.tableColumn, { width: "50%" }]}>
          <Text style={styles.tableColumnText}>Acties toevoegen</Text>
        </View>
        <View style={[styles.tableColumn, { width: "25%", alignItems: 'center' }]}>
          <Text> </Text>
        </View>
        <View style={[styles.tableColumn, { width: "25%", alignItems: 'center' }]}>
          <AntDesign name="check" size={40} color="black" />
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={[styles.tableColumn, { width: "50%" }]}>
          <Text> </Text>
        </View>
        <View style={[styles.tableColumn, { width: "25%", justifyContent: 'flex-start', alignItems: 'center' }]}>
          <Text style={[styles.tableColumnText]}>Gratis</Text>
        </View>
        <View style={[styles.tableColumn, { width: "25%" }]}>
          <Text style={[styles.tableColumnText, { textAlign: "center"}]}>30 dagen Gratis</Text>
          <Text style={{ fontSize: 10, textAlign: "center" }}>Daarna €2,99 per filiaal per maand</Text>
        </View>
      </View>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <TouchableOpacity
        style={[styles.mainButton, { width: 150 }]}
        onPress={() => {
          navigation.navigate("Map");
        }}
      >
        <Text>Basis (1 min)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.mainButton, {width: 150}]}
        onPress={() => {
          navigation.navigate("Filter");
        }}
      >
        <Text>Plus (1 min)</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  expandedContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 50,
    paddingBottom: 100,
    width: "100%",
  },
  mainButton: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    width: 250,
    height: 45,
    marginTop: 30,
  },
  tableRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  tableColumn: {
    justifyContent: "center",
  },
  tableColumnText: {
    fontSize: 17,
    fontWeight: "500",
  },
});

export default ScreenThree;
