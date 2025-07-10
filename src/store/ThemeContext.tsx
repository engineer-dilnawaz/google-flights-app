import { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "~/constants";

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
  theme: lightTheme,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const systemScheme = useColorScheme();
  const systemPrefersDark = systemScheme === "dark";

  useEffect(() => {
    setIsDark(systemPrefersDark);
  }, [systemPrefersDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
