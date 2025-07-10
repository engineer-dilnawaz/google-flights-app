import { useTheme } from "react-native-paper";
import { ThemeColors } from "~/types/theme";

export const useAppTheme = () => {
  return useTheme<ThemeColors>();
};
