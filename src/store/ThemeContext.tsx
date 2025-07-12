import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useColorScheme } from "react-native";
import type { MD3Theme } from "react-native-paper"; // ✅ This is the correct type
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import {
  getThemePreferenceFromStorage,
  saveThemePreferenceToStorage,
} from "../utils/themeStorage";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
  theme: MD3Theme;
};

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
  theme: MD3LightTheme,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemScheme === "dark");

  useEffect(() => {
    const fetchUserThemePreference = async () => {
      const isDarkMode = await getThemePreferenceFromStorage();
      if (typeof isDarkMode === "boolean") {
        if (isDarkMode) setIsDark(isDarkMode);
      }
    };
    fetchUserThemePreference();
  }, []);

  useEffect(() => {
    const switchToDarkTheme = async () => {
      await saveThemePreferenceToStorage(false);
    };
    setIsDark(systemScheme === "dark");
    if (systemScheme === "dark") {
      switchToDarkTheme();
    }
  }, [systemScheme]);

  const toggleTheme = async () => {
    setIsDark((prev) => !prev);
    await saveThemePreferenceToStorage(!isDark);
  };

  const theme = useMemo(
    () => (isDark ? MD3DarkTheme : MD3LightTheme),
    [isDark]
  );

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
