import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Colors from "../config/colors";
import BakeryImage from "./../../assets/images/home/bakery.svg";
import ChairPhoneImage from "./../../assets/images/home/chair-phone.svg";
import PhoneMapImage from "./../../assets/images/home/phone-map.svg";
import TwoPhonesImage from "./../../assets/images/home/two-phones.svg";
import ScreenOne from "./../components/intro/ScreenOne";
import ScreenTwo from "./../components/intro/ScreenTwo";
import ScreenThree from "./../components/intro/ScreenThree";
import ScreenFour from "./../components/intro/ScreenFour";

const IntroScreen = ({ navigation }) => {
  const onboardingRef = useRef(null);

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
            image: <ChairPhoneImage />,
            title: <ScreenOne onboardingRef={onboardingRef} />,
            subtitle: "",
          },
          {
            backgroundColor: Colors.white,
            image: <BakeryImage style={{ marginLeft: -80 }} />,
            title: <ScreenTwo onboardingRef={onboardingRef} />,
            subtitle: "",
          },
          {
            backgroundColor: Colors.white,
            image: <TwoPhonesImage />,
            title: <ScreenThree onboardingRef={onboardingRef}/>,
            subtitle: "",
          },
          {
            backgroundColor: Colors.white,
            image: <PhoneMapImage />,
            title: <ScreenFour onboardingRef={onboardingRef}/>,
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

export default IntroScreen;
