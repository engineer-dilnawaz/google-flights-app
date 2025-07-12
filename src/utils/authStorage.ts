import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_KEY = "auth_user";

export type StoredUser = {
  name: string;
  emailOrPhone: string;
  password: string;
};

export const saveUserToStorage = async (user: StoredUser): Promise<void> => {
  try {
    const json = JSON.stringify(user);
    await AsyncStorage.setItem(USER_KEY, json);
  } catch (error) {
    console.error("Error saving user data", error);
    throw error;
  }
};

export const getUserFromStorage = async (): Promise<StoredUser | null> => {
  try {
    const json = await AsyncStorage.getItem(USER_KEY);
    return json ? JSON.parse(json) : null;
  } catch (error) {
    console.error("Error retrieving user data", error);
    return null;
  }
};

export const removeUserFromStorage = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(USER_KEY);
  } catch (error) {
    console.error("Error removing user data", error);
  }
};

export const isUserLoggedIn = async (): Promise<boolean> => {
  const user = await getUserFromStorage();
  return !!user;
};
