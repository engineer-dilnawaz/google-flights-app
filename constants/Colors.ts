// theme.ts
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: tintColorLight,
    background: "#fff",
    surface: "#fff",
    text: "pink",
    onSurface: "#11181C",
    outline: "#687076",
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: tintColorDark,
    background: "#151718",
    surface: "#151718",
    text: "orange",
    onSurface: "#ECEDEE",
    outline: "#9BA1A6",
  },
};
