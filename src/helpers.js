import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export async function setStorageValue(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
}

export async function getStorageValue(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
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
