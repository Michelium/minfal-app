import React, { useState, useEffect } from "react";
import * as Colors from "./../../config/colors";
import { View, Text, StyleSheet, Image } from "react-native";
import LocationIcon from "./../../../assets/icons/edit-location-icon.svg";

const LocationCompanyInfo = ({
  street_name,
  house_number,
  postcode,
  place,
  periods,
}) => {
  const [period, setPeriod] = useState({});
  const [loading, setLoading] = useState(true);

  const getPeriods = async () => {
    try {
      const d = new Date();
      let day = d.getDay();
      day = day === 0 ? 7 : day;
      let period = {};
      if (periods !== undefined) {
        periods.forEach((element) => {
          if (element.week_day === day) {
            period = element;
          }
        });
      }

      setPeriod(period);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  function isOpen(period) {
    if (period.open_all_day === true) {
      return true;
    } 
    if (period.closed === true) {
      return false;
    }
    if (period.open_at && period.close_at) {
      let currentDate = new Date();

      let startDate = new Date(currentDate.getTime());
      startDate.setHours(period.open_at.split(":")[0]);
      startDate.setMinutes(period.open_at.split(":")[1]);

      let endDate = new Date(currentDate.getTime());
      endDate.setHours(period.close_at.split(":")[0]);
      endDate.setMinutes(period.close_at.split(":")[1]);

      return startDate < currentDate && endDate > currentDate;
    } else {
      return false;
    }
  }

  useEffect(() => {
    getPeriods();
  }, [periods]);

  if (!loading) {
    return (
      <>
        <Text style={styles.title}>Bedrijfsinformatie</Text>
        <View style={styles.container}>
          <View style={styles.locationNameContainer}>
            <View style={styles.iconContainer}>
              <LocationIcon />
            </View>
            <View>
              <Text style={styles.textSmall}>
                {street_name} {house_number}
              </Text>
              <Text style={styles.textSmall}>
                {postcode} {place}
              </Text>
            </View>
          </View>
          <View style={styles.locationOpeningHourContainer}>
            <Text>Openingstijden</Text>
            <Text>
              {period.open_at} - {period.close_at}
            </Text>
            <Text
              style={{
                color:
                  !loading && isOpen(period)
                    ? "green"
                    : "red",
              }}
            >
              {!loading && isOpen(period)
                ? "Open"
                : "Gesloten"}
            </Text>
          </View>
        </View>
      </>
    );
  } else {
    return <Text style={{ color: "red" }}>Kan niet worden geladen</Text>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    backgroundColor: "#F6F6F6",
    borderColor: "rgba(201,201,201, 0.3)",
  },
  locationNameContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  locationOpeningHourContainer: {
    textAlign: "right",
    alignItems: "flex-end",
  },
  textSmall: {
    fontSize: 12,
    color: "#000",
    marginLeft: 5,
  },
  iconContainer: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
    marginTop: 5,
    marginBottom: 15,
  },
});

export default LocationCompanyInfo;
