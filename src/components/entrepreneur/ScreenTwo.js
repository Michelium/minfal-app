import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import * as Colors from "./../../config/colors";
import { useNavigation } from "@react-navigation/native";
import MoneyIcon from "./../../../assets/images/entrepreneur/money-icon.svg";
import LeavesIcon from "./../../../assets/images/entrepreneur/leaves-icon.svg";
import CompetitorsIcon from "./../../../assets/images/entrepreneur/competitors-icon.svg";
import NewClientIcon from "./../../../assets/images/entrepreneur/new-client-icon.svg";

const ScreenTwo = ({ onboardingRef }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.expandedContainer}>
      <View>
        <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "600" }}>Jouw voordelen</Text>
        <ScrollView style={{ paddingTop: 50 }} showsVerticalScrollIndicator={false} alwaysBounceVertical={false}>
          <View style={styles.listItem}>
            <View style={styles.leftIcon}>
              <MoneyIcon />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.listTitle}>Een plekje is gratis.</Text>
              <Text style={styles.listSubTitle}>En snel geregeld.</Text>
            </View>
          </View>
          <View style={styles.listItem}>
            <View style={styles.leftIcon}>
              <LeavesIcon />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.listTitle}>Je duurzaamheidsimago</Text>
              <Text style={styles.listSubTitle}>Krijgt een boost. Belangrijker dan ooit tevoren.</Text>
            </View>
          </View>
          <View style={styles.listItem}>
            <View style={styles.leftIcon}>
              <CompetitorsIcon style={{ fill: "black" }} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.listTitle}>Onderscheid je van concurrenten</Text>
              <Text style={styles.listSubTitle}>En vergroot je bekendheid op de kaart.</Text>
            </View>
          </View>
          <View style={styles.listItem}>
            <View style={styles.leftIcon}>
              <NewClientIcon />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.listTitle}>Verwelkom nieuwe klanten</Text>
              <Text style={styles.listSubTitle}>En beloon ze met korting via een Plus account (optioneel)</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View>
        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => {
            onboardingRef.current.goNext();
          }}
        >
          <Text>Verder</Text>
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
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
    padding: 5,
  },
  leftIcon: {
    width: 65,
    height: 65,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  listTitle: {
    fontWeight: "500",
    fontSize: 23,
  },
  listSubTitle: {
    fontSize: 18,
  },
});

export default ScreenTwo;
