import { AsyncStorage } from "react-native";

export const getItem = async key => {
  try {
      console.log('BEFORE');
    const value = await AsyncStorage.getItem(key);
      console.log('AFTER');

    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
    return error;
    // Error retrieving data
  }
};

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Error saving data
  }
};
