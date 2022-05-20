import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import * as Colors from "../config/colors";
import ScreenOne from "../components/entrepreneur/ScreenOne";
import ScreenTwo from "../components/entrepreneur/ScreenTwo";
import ScreenThree from "../components/entrepreneur/ScreenThree";

const EntrepreneurScreen = ({ navigation }) => {
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
            image: <></>,
            backgroundColor: Colors.white,
            title: <ScreenOne onboardingRef={onboardingRef} />,
            subtitle: "",
          },
          {
            image: <></>,
            backgroundColor: Colors.white,
            title: <ScreenTwo onboardingRef={onboardingRef} />,
            subtitle: "",
          },
          {
            image: <></>,
            backgroundColor: Colors.white,
            title: <ScreenThree onboardingRef={onboardingRef} />,
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
