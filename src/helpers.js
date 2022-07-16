import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as Location from "expo-location";

export async function setStorageValue(key, value) {
  if (typeof value !== "string" || !value instanceof String) {
    value = value.toString();
  }

  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
}

export async function getStorageValue(key) {
  try {
    let storageValue = null;
    await AsyncStorage.getItem(key)
      .then((value) => {
        storageValue = value;
        return value;
      })
      .then((value) => {
        storageValue = value;
        return value;
      });
    return storageValue;
  } catch (error) {
    console.log(error);
  }
}

export async function getSetting(name) {
  let setting = null;
  try {
    const response = await axios({
      method: "post",
      url: "https://app.minfal.nl/api/settings",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
      data: {
        name: name,
      },
    }).then((response) => {
      if (response.status === 200) {
        setting = response.data;
      }
    });
  } catch (error) {
    alert(error);
  }

  return setting;
}

export async function getCityApiData(latitude, longitude) {
  let data = null;
  try {
    const response = await axios({
      method: "get",
      url: "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+latitude+"&longitude="+longitude+"&localityLanguage=nl",
    }).then((response) => {
      if (response.status === 200) {
        data = response.data;
      }
    });
  } catch (error) {
    alert(error);
  }

  return data;
}
