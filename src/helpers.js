import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setStorageValue(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  };

export async function getStorageValue(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
          return value;
      }
    //   console.log(value);
    //   return value;
    } catch (error) {
      console.log(error);
    }
  };