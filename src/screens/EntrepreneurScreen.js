import React, { useRef } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Colors from "../config/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MoneyIcon from "./../../assets/images/entrepreneur/money-icon.svg";
import LeavesIcon from "./../../assets/images/entrepreneur/leaves-icon.svg";
import CompetitorsIcon from "./../../assets/images/entrepreneur/competitors-icon.svg";
import NewClientIcon from "./../../assets/images/entrepreneur/new-client-icon.svg";
import CheckMark from "./../../assets/icons/edit-check-mark-icon.svg";
import { AntDesign } from "@expo/vector-icons";

const EntrepreneurScreen = ({ navigation }) => {
  const onboardingRef = useRef(null);

  const storeUserMode = async (value) => {
    try {
      await AsyncStorage.setItem("user_mode", value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Onboarding
        ref={onboardingRef}
        onDone={() => console.log("done")}
        showSkip={false}
        containerStyles={{
          flex: 1,
        }}
        showPagination={false}
        pages={[
          {
            image: <></>,
            backgroundColor: Colors.white,
            title: (
              <View style={{ alignContent: "center" }}>
                <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "600" }}>Mogen klanten bij jou eigen verpakkingen meenemen?</Text>
                <Text style={{ textAlign: "center", fontSize: 25, marginTop: 50 }}>Zet jezelf dan binnen 1 minuut in de Minfal app!</Text>
                <TouchableOpacity
                  style={styles.mainButton}
                  onPress={() => {
                    onboardingRef.current.goNext();
                  }}
                >
                  <Text>Verder</Text>
                </TouchableOpacity>
              </View>
            ),
            subtitle: "",
          },
          {
            image: <></>,
            backgroundColor: Colors.white,
            title: (
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
            ),
            subtitle: "",
          },
          {
            image: <></>,
            backgroundColor: Colors.white,
            title: (
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
            ),
            subtitle: "",
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

export default EntrepreneurScreen;
