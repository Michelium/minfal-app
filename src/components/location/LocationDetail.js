import React, {
  useEffect,
  useState,
} from "react";
import { View, Text, StyleSheet } from 'react-native';
import axios from "axios";
import LocationName from "./LocationName";
import LocationCompanyInfo from "./LocationCompanyInfo";
import LocationActionButton from "./LocationActionButton";
import PhoneIcon from "./../../../assets/icons/edit-phone-icon.svg";
import GlobeIcon from "./../../../assets/icons/edit-globe-icon.svg";
import HeartIcon from "./../../../assets/icons/nav-heart-icon.svg";
import Divider from "../../common/Divider";

const LocationDetail = ({location}) => {

  const [company, setCompany] = useState({});

  const getCompanyInfo = async () => {
    try {
      axios({
        method: "post",
        url: "https://app.minfal.nl/api/company",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: {
          id: location,
        },
      }).then((response) => {
        setCompany(response.data);
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getCompanyInfo();
  }, []);

  return (
    <View style={styles.container}>
      <LocationName {...company} />
      <Divider />
      <LocationCompanyInfo {...company} />
      <View style={styles.actionButtonContainer}>
        <LocationActionButton title="Bellen" icon={<PhoneIcon />} />
        <LocationActionButton title="Website" icon={<GlobeIcon />} />
        <LocationActionButton title="Favoriet" icon={<HeartIcon />} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#fff",
  },
  actionButtonContainer: {
    marginTop: 15,
    marginBottom: 25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default LocationDetail;
