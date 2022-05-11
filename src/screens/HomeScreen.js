import React, { useRef } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Colors from "./../config/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BakeryImage from "./../../assets/images/home/bakery.svg";
import ChairPhoneImage from "./../../assets/images/home/chair-phone.svg";
import PhoneMapImage from "./../../assets/images/home/phone-map.svg";
import TwoPhonesImage from "./../../assets/images/home/two-phones.svg";

const HomeScreen = ({ navigation }) => {
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
            backgroundColor: Colors.white,
            image: <ChairPhoneImage/>,
            title: (
              <View>
                <Text style={styles.title}>Welkom</Text>
              </View>
            ),
            subtitle: (
              <View>
                <TouchableOpacity
                  style={styles.mainButton}
                  onPress={() => {
                    storeUserMode("client");
                    onboardingRef.current.goNext();
                  }}
                >
                  <Text>Ga door</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.entrepreneurButton}
                  onPress={() => {
                    storeUserMode("entrepreneur");
                    navigation.navigate('Entrepreneur');
                  }}
                >
                  <Text>Ondernemer</Text>
                </TouchableOpacity>
              </View>
            ),
          },
          {
            backgroundColor: Colors.white,
            image: <BakeryImage style={{marginLeft: -80}}/>,
            title: (
              <View>
                <Text style={{ textAlign: "center", fontSize: 25 }}>Recyclen kan...</Text>
                <Text style={{ fontSize: 25 }}>
                  Tóch is <Text style={{ color: Colors.primary }}>hergebruiken</Text> véél beter!
                </Text>
              </View>
            ),
            subtitle: (
              <View style={{ width: "90%", alignItems: "center" }}>
                <Text style={{ textAlign: "center", fontSize: 18, marginTop: 50 }}>Winkelen met je eigen verpakking was nog nooit zó makkelijk!</Text>
                <TouchableOpacity
                  style={styles.mainButton}
                  onPress={() => {
                    onboardingRef.current.goNext();
                  }}
                >
                  <Text>Volgende</Text>
                </TouchableOpacity>
              </View>
            ),
          },
          {
            backgroundColor: Colors.white,
            image: <TwoPhonesImage/>,
            title: (
              <View style={{ alignItems: "center" }}>
                <Text style={{ textAlign: "center", fontSize: 25 }}>Soorten bedrijven</Text>
                <Text style={{ fontSize: 18, marginTop: 50 }}>Ondernemers met Plus geven je</Text>
                <Text style={{ fontSize: 20, color: Colors.primary, marginTop: 50 }}>Exlusieve Minfal korting</Text>
                <TouchableOpacity
                  style={styles.mainButton}
                  onPress={() => {
                    onboardingRef.current.goNext();
                  }}
                >
                  <Text>Volgende</Text>
                </TouchableOpacity>
              </View>
            ),
            subtitle: '',
          },
          {
            backgroundColor: Colors.white,
            image: <PhoneMapImage/>,
            title: (
              <View style={{ alignContent: "center" }}>
                <Text style={{ textAlign: "center", fontSize: 25 }}>Stel een plaats in en zoek meteen ondernemers in de buurt!</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <TouchableOpacity
                    style={[styles.mainButton, { width: 150 }]}
                    onPress={() => {
                      navigation.navigate("Map");
                    }}
                  >
                    <Text>Naar de kaart</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.mainButton, {width: 150}]}
                    onPress={() => {
                      navigation.navigate("Filter");
                    }}
                  >
                    <Text>Filter bedrijven</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ),
            subtitle: '',
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
  title: {
    fontWeight: "400",
    fontSize: 45,
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
  entrepreneurButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    marginTop: 10,
  },
});

export default HomeScreen;
