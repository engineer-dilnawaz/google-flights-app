import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME_PREFERENCE = "theme_preference";

export type StoredThemePreference = {
  isDark: boolean;
};

export const saveThemePreferenceToStorage = async (
  darkMode: boolean
): Promise<void> => {
  try {
    const json = JSON.stringify(darkMode);
    await AsyncStorage.setItem(THEME_PREFERENCE, json);
  } catch (error) {
    console.error("Error saving user data", error);
    throw error;
  }
};

export const getThemePreferenceFromStorage =
  async (): Promise<StoredThemePreference | null> => {
    try {
      const json = await AsyncStorage.getItem(THEME_PREFERENCE);
      return json ? JSON.parse(json) : null;
    } catch (error) {
      console.error("Error retrieving theme preference", error);
      return null;
    }
  };

export const removeThemePreferenceFromStorage = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(THEME_PREFERENCE);
  } catch (error) {
    console.error("Error removing theme preference", error);
  }
};

export const isDarkMode = async (): Promise<boolean> => {
  const isDark = await getThemePreferenceFromStorage();
  return !!isDark;
};
